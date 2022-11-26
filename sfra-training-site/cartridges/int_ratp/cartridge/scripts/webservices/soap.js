'use strict';

/**
 * @module webservices/soap
 */

/**
 * RATP Connector
 * RATP API webservice
 * Documentation:
 *  http://www.audentia-gestion.fr/RATP/ratp-wsiv-opendata/index.html
 *
 */

 const LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');
 const WSUtil = require('dw/ws/WSUtil');
 const Logger = require('dw/system/Logger');

/*********************************************************************************
* Service Name : ratp.soap.getLines
/*********************************************************************************/
module.exports.getLines  = function() {
    var service = LocalServiceRegistry.createService("ratp.soap.getLines", {
        initServiceClient: function(svc) {
            return initServiceClient.call(this, svc, 'getLines');
        },
        createRequest: function(svc, message) {
            initRequest.call(soapSvc, svc);
            var request = new this.webReference.GetLines();
            return request;
        },
        execute: function(svc, requestObject) {
            return svc.serviceClient.getLines(requestObject);
        },
        parseResponse: function(svc, client) {
              return client.text;
         },
         mockCall: function(svc, client) {
            var obj = {
            };
            return {
                statusCode: 202,
                statusMessage: 'Accepted',
                text: JSON.stringify(obj)
            };
         }
    });
    return service;
};