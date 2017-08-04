'use strict'
exports.getinfo = function(req, res){
  res.json({
    'ipaddress':req.headers['x-forwarded-for'].substr(0,14),
    'language':req.headers['accept-language'].substr(0,5),
    'software':req.headers['user-agent'].substr(12,20)
  });
  
};