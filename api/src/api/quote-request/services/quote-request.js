'use strict';

/**
 * quote-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quote-request.quote-request');
