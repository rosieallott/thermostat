describe ("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('starting temperature is 20 degrees', function() {
    expect(thermostat.temperature).toEqual (20);
  });

  it('increases temperature with up button', function() {
    thermostat.increase();
    expect(thermostat.temperature).toEqual (21);
  });

  it('decreases temperature with down button', function() {
    thermostat.decrease();
    expect(thermostat.temperature).toEqual (19);
  });
});
