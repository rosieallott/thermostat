"use strict";

function Thermostat() {
  this.temperature = 20;
  this.powersave = true;

  this.MAX = {true: 25, false: 32};
}

Thermostat.prototype = {
  increase: function (amount = 1) {
    if(this.temperature + amount > (this.MAX[this.powersave])) {
      throw new Error('cannot go above ' + this.MAX[this.powersave]+"C")
    }
    else {
      this.temperature += amount;
    }
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
