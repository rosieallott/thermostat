"use strict";

function Thermostat() {
  this.temperature = 20;
  this.powersave = true;
  this.MAX = {true: 25, false: 32};
}

Thermostat.prototype = {
  increase: function (amount = 1) {
    if(this.temperature + amount > (this.MAX[this.powersave])) {
      throw new Error('cannot go above ' + this.MAX[this.powersave]+"C");
    }
    else {
      this.temperature += amount;
    }
  },
  decrease: function (amount = 1) {
    if(this.temperature - amount < (10)) {
      throw new Error('cannot go below 10C');
    }
    else {
      this.temperature -= amount;
    }
  },
  switchPowerMode: function(){
    this.powersave = !this.powersave;
  },
  resetTemp: function(){
    this.temperature = 20;
  },
  displayEnergyUsage: function() {
    if(this.temperature < (18)) {
      return 'low-energy';
    }
    else if(this.temperature < (25)) {
      return 'medium-energy';
    }
    else {
      return 'high-energy';
    }
  }
};

$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  $('#powersave').text(thermostat.powersave);

  $('#temperature-increase').on('click',function(){
    thermostat.increase();
    $('#temperature').text(thermostat.temperature);
  });
  $('#temperature-decrease').on('click',function(){
    thermostat.decrease();
    $('#temperature').text(thermostat.temperature);
  });
  $('#temperature-reset').on('click',function(){
    thermostat.resetTemp();
    $('#temperature').text(thermostat.temperature);
  });
  $('#switchpowersaving-off').on('click',function(){
    thermostat.switchPowerMode();
    $('#powersave').text(thermostat.powersave);
  });
});
