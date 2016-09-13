describe ("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe ('#default settings', function(){
    it('starting temperature is 20 degrees', function() {
      expect(thermostat.temperature).toEqual (20);
    });

    it('power saving mode is on by default', function(){
      expect(thermostat.powersave).toBeTruthy();
    });
  });

  describe ('temperature management', function(){
    it('increases temperature with up button', function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual (21);
    });
    it('decreases temperature with down button', function() {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual (19);
    });
    it('decreases temperature with down button by amount', function() {
      thermostat.decrease(5);
      expect(thermostat.temperature).toEqual (15);
    });
    it('increases temperature with up button by amount', function() {
      thermostat.increase(5);
      expect(thermostat.temperature).toEqual (25);
    });
  });

  describe ('edge cases', function(){
    it('throws error if decreased below 10C', function(){
      expect(function() {thermostat.decrease(11)}).toThrowError('cannot go below 10C')
    });

    it('throws error if powersave mode is on and temperature is above 25', function(){
      expect(function() {thermostat.increase(6)}).toThrowError('cannot go above 25C')
    })
    it('throws error if powersave mode is off and temperature is above 32', function(){
      thermostat.powersave = false
      expect(function() {thermostat.increase(13)}).toThrowError('cannot go above 32C')
    })
  });
});
