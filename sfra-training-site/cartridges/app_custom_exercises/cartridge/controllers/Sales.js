'use strict';

var server = require('server');


server.get('Show', function (req, res, next) {

    //define a variable named PageMgr that requires the dw.experience.PageMgr API
    var PageMgr = require('dw/experience/PageMgr');
    //get the page with the specific, hard-coded id
    var page = PageMgr.getPage('salepage');

    //Use res.page to render the page
    //Hint: Use hasVisibilityRules() and isVisible() checks.
    //Hint: Don't forget to cover the else condition, because in our exercise hasVisibilityRules() is false.
    if (page && page.isVisible()) {
      if (page.hasVisibilityRules()) {
        // There are multiple versions of this page, so no caching.
        res.page(page.ID, {});
      } else {
        // We could cache this page because it is not targeted.
        res.cachePeriod = 168; // eslint-disable-line no-param-reassign
        res.cachePeriodUnit = "hours"; // eslint-disable-line no-param-reassign
        res.page(page.ID, {});
      }

    } else {
      res.print('Error');
    }


    next();

});

module.exports = server.exports();
