describe ("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe ('#default settings', function(){
    it('starting temperature is 20 degrees', function() {
      expect(thermostat.temperature).toEqual (20);
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
  });

  describe ('edge cases', function(){
    it('throws error if decreased below 10C', function(){
      expect(function() {thermostat.decrease(11)}).toThrowError('cannot go below 10C')
    });
  });
});
