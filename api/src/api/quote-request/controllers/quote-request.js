'use strict';

/**
 * quote-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::quote-request.quote-request', ({ strapi }) => ({
    async create(ctx) {
        const { name, email, phone, message,file } = ctx.request.body;
        try {
            await strapi.service("api::quote-request.quote-request").create({
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                    file: file,
                },
            });
            return { message: 'Email envoyé' };
        } catch (err) {
            ctx.throw(500, err);
        }
    },
}))
