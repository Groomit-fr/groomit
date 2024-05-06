// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_KEY);
const express = require('express');
const app = express();

("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({

  async create(ctx) {
    const { cart, type, sess } = ctx.request.body;
    if (type === 'payment') {
      if (!cart) {
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
                description: product.category + " en taille : " + product.size,
                images: product.image
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
          success_url: `${process.env.CLIENT_URL}/successOrder?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.CLIENT_URL}/cancelOrder`,
          line_items: lineItems,
          shipping_address_collection: {
            allowed_countries: ["FR"],
          },
          shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 700,
                  currency: 'eur',
                },
                display_name: 'Livraison à domicile',
              },
            },
          ]
        });
        return { stripeSession: session };
      } catch (err) {
        ctx.throw(500, err);
      }
    } else if (type === 'order') {

      const session = await stripe.checkout.sessions.retrieve(
        sess
      );
      console.log(session);

      try {
        await strapi.service("api::order.order").create({
          data: {
            stripeId: session.id,
            email: session.customer_details.email,
            shipping: session.shipping_details,
            products: cart,
            clientInfo: session.customer_details,
          },
        });
      }catch(err){
        ctx.throw(500, err);
      }
     
      return { stripeSession: session };
    }

  },
}));
