'use strict';

/**
 * gist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gist.gist');
