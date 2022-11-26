'use strict';

/**
 * @module webservices/rest
 */

/**
 * RATP Connector
 * RATP API webservice
 * Documentation:
 *  https://api-ratp.pierre-grimaud.fr/v4/
 *
 */

 const LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

/*********************************************************************************
* Service Name : ratp.http.traffic
/*********************************************************************************/
module.exports.traffic  = function() {
    var service = LocalServiceRegistry.createService("ratp.http.traffic", {
        createRequest: function(svc, params) {
            // Url params
            svc.setRequestMethod('GET');
            svc.URL += '/traffic';
            svc.URL += !empty(params['type']) ? '/' + params['type'] : '';
            svc.URL += !empty(params['code']) ? '/' + params['code'] : '';
            // Header params
            svc.addHeader('Content-type', 'application/json');
            svc.addHeader('charset', 'UTF-8');
        },
        parseResponse: function(svc, client) {
              return client.text;
        },
        mockCall: function(svc, client) {
            var obj = {
                "result": {
                    "metros": [
                        {
                        "line": "007",
                        "slug": "normal",
                        "title": "Trafic normal",
                        "message": "Trafic normal sur l'ensemble de la ligne."
                        }
                    ],
                    "rers": [
                        {
                        "line": "Z",
                        "slug": "Travaux",
                        "title": "Trafic ralenti",
                        "message": "Mode escargo sur l'ensemble de la ligne en raison de travaux interminables."
                        }
                    ]
                },
                "_metadata": {
                    "call": "GET /traffic",
                    "date": "2021-11-22T16:44:03+01:00",
                    "version": 4
                }
            };
            return {
                statusCode: 200,
                statusMessage: 'OK',
                text: JSON.stringify(obj)
            };
        }
    });
    return service;
};