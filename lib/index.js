'use strict';

const loaderUtils = require('loader-utils');
const opencc      = require('node-opencc');

module.exports = function (source, map) {
  this.cacheable && this.cacheable();

  const options = loaderUtils.getOptions(this);

  return typeof source === 'string' ? opencc[options.translation](source) : source;
};
