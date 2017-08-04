'use strict'
module.exports = function(app){
  var info= require('./controller')
  app.route('/').get(info.getinfo);
};