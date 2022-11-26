'use strict';

var server = require('server');

var ratpApi = require('int_ratp/cartridge/scripts/webservices/rest');

server.get('Traffic', function (req, res, next) {
    var params = request.httpParameterMap;
    var service = ratpApi.traffic();
    var result = service.call(params);

    //res.print(result.object);
    res.render('ratp/testraw', {traffic: result.object});

    next();
});

module.exports = server.exports();
