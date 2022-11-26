'use strict';

//Define a variable named base that equals module.superModule
let base = module.superModule;

function store(storeObject) {
    //use base.call to assign the standard values to the object
    //then set the email attribute to the store email
  base.call(this, storeObject);
  this.email = storeObject.email;
}

module.exports = store;
