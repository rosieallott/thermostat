
DEFAULT_TEMPERATURE = 20;

var Thermostat = function Thermostat(){"use strict";
  this._temperature = DEFAULT_TEMPERATURE;
  this._minTemperature = 10;
  this._powerSaving = "ON";
  this._powerSaveMax = 25;
  this._maxTemperature = 32;
};

Thermostat.prototype = {

  showTemperature: function () {
    return this._temperature;
  },
  increaseTemperature: function () {
    if(this._temperature >= this.currentPower()){
      throw new Error("temperature cannot go above max limit.");
    } else {
      return this._temperature += 1;

    }
  },
  decreaseTemperature: function () {
    if (this._temperature <= this._minTemperature){
      throw new Error("temperature cannot go below minimum.");
    } else {
      return this._temperature -= 1;
    }
  },
  resetTemperature: function() {
    return this._temperature = DEFAULT_TEMPERATURE;
  },

  currentPower : function() {
    if(this._powerSaving === "ON"){
      return this._powerSaveMax;
    } else {
      return this._maxTemperature;
    }
  },

  switchPowerSaving: function(){
    if (this._powerSaving === "ON") {
      return this._powerSaving = "OFF";
    } else {
      return this._powerSaving = "ON";
    }
  },

  displayEfficiency : function() {
    if(this._temperature < 18) {
      return "Green";
    } else if (this._temperature < 25) {
      return "Yellow";
    } else {
      return "Red";
    }
  }
};
