'use strict';

/**
 * quote-request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::quote-request.quote-request');
