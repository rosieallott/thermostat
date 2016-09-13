
var Thermostat = function Thermostat(){"use strict";
  this._temperature = 20;
  this._minTemperature = 10;
  this._powerSaving = true;
  this._powerSaveMax = 25;
  this._maxTemperature = 32;
};

Thermostat.prototype ={
  showTemperature: function () {
  return this._temperature;
},
  increaseTemperature: function () {
    if (this._powerSaving === true){
      if (this._temperature >= this._powerSaveMax){
        throw new Error("temperature cannot go below minimum.");
      } else {
        this._temperature -= 1;
      }} else {
      if (this._temperature >= this._maxTemperature){
        throw new Error("temperature cannot go below minimum.");
    } else {
      this._temperature -= 1;
}}},
  decreaseTemperature: function () {
    if (this._temperature <= this._minTemperature){
      throw new Error("temperature cannot go below minimum.");
    } else {
      this._temperature -= 1;
    }}
}};
