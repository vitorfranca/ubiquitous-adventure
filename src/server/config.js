var environment = process.env.NODE_ENV || 'development';
var config = require('./config.' + environment + '.js');
config.environment = environment;

module.exports = config;
