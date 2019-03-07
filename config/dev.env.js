'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // API_ROOT:'"http://39.105.214.72:8080"'   //��������
    API_ROOT:'"http://121.196.193.123:8080"'
})

