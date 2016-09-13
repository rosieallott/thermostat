"use strict";

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype = {
  increase: function () {
    this.temperature += 1;
  },
  decrease: function (amount = 1) {
    if(this.temperature - amount < (10)) {
      throw new Error('cannot go below 10C')
    }
    else {
      this.temperature -= amount;
    }
  }
}
