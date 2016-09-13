
describe("feature test", function(){ "use strict";

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it("Has an initial temperature of 20", function(){
    expect(thermostat.showTemperature()).toEqual(20);
  });

  it("can be increased in temperature", function(){
    thermostat.increaseTemperature();
    expect(thermostat.showTemperature()).toEqual(21);
  });

  it("can be decreased in temperature", function(){
    thermostat.decreaseTemperature();
    expect(thermostat.showTemperature()).toEqual(19);
  });

  it("cannot be decreased in temperature past minimum", function(){
    thermostat._temperature = 10;
    expect(function(){thermostat.decreaseTemperature();}).toThrowError("temperature cannot go below minimum.");
  });

  it("cannot be increased in temperature past powersave(turned on) max", function(){
    thermostat._temperature = 25;
    expect(function(){thermostat.increaseTemperature();}).toThrowError("temperature cannot go above max limit.");
  });

  it("cannot be increased in temperature past powersave(turned off) max", function(){
    thermostat._temperature = 32;
    expect(function(){thermostat.increaseTemperature();}).toThrowError("temperature cannot go above max limit.");
  });

  it("can change temperature back to default on reset", function(){
    thermostat._temperature = 32;
    thermostat.resetTemperature();
    expect(thermostat.showTemperature()).toEqual(20);
  });
});
