console.log("order controller");


const stripe = require("stripe")(process.env.STRIPE_KEY);

("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  
  async create(ctx) {
    //TOUT ÇA TU PEUX SUPPRIMER (CODE QUI MARCHE MAIS ENVOIE EN DUR)
    // try {
      
    //   await strapi.service("api::order.order").create({
    //     data: {
    //       email: "bliblux",
    //     },
    //   });
    //   return { stripeSession: "session" };
    // } catch (err) {
    //   ctx.throw(500, err);
    // }
    //JUSQU'ICI



    
    //LÀ C'EST TON CODE À TOI, A CORRIGER

    const { cart } = ctx.request.body;
    console.log(cart);
    if (!cart) {
      console.log("3");
      ctx.throw(400, "La commande doit contenir un panier");
    }
    const lineItems = await Promise.all(
      cart.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);
        return {
          price_data: {
            currency: "eur",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: product.quantity,
        };
      })
    );
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?suceess=false`,
        line_items: lineItems,
        shipping_address_collection: {
          allowed_countries: ["FR"],
        },
      });
      await strapi.service("api::order.order").create({
        data: {
          products: cart,
          stripeId: session.id,
        },
      });
      return { stripeSession: session };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));
