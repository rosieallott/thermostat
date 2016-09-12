describe('Thermostat', function(){
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Default Settings', function(){
    it('Should have a starting temperature of 20', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('Should default to power saving mode', function(){
      expect(thermostat.isPowerSaving).toEqual(true);
    });
  });

  describe('Power Saving Mode', function(){
    it('Should switch power saving mode off', function(){
      thermostat.switchMode();
      expect(thermostat.isPowerSaving).toEqual(false);
    });
  });

  describe('Reset button', function(){
    it('Should reset the temperate to 20', function(){
      thermostat.increase(5);
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('Energy usage indicator', function(){
    it('should be low-energy when temperature < 18', function(){
      thermostat.decrease(3);
      expect(thermostat.energyUsage()).toEqual('low-energy');
    });
    it('should be medium-energy when 18 < temperature < 25', function(){
      thermostat.increase(1);
      expect(thermostat.energyUsage()).toEqual('medium-energy');
    });
    it('should be high-energy when temperature > 25', function(){
      thermostat.switchMode();
      thermostat.increase(7);
      expect(thermostat.energyUsage()).toEqual('high-energy');
    });
  });

  describe('Temperature changes',function(){
    it('Should increase temperature by one', function(){
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });
    it('Should increase temperature by amount of increase', function(){
      thermostat.increase(5);
      expect(thermostat.temperature).toEqual(25);
    });
    it('Should decrease temperature by one', function(){
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });
    it('Should decrease temperature by amount of decrease', function(){
      thermostat.decrease(5);
      expect(thermostat.temperature).toEqual(15);
    });
  });


  describe('Temperature Edge Cases', function(){
    describe('Minimum Temperature', function(){
      it('Should throw error if temperature decreases below 10', function(){
        expect(function(){thermostat.decrease(30)}).toThrowError('Minimum Temperature is 10C')
      });
    });
    describe('Maximum Temperature', function(){
      it('In Power Saving Mode, should throw error if temperature over 25', function(){
        expect(function(){thermostat.increase(30)}).toThrowError('Maximum Temperature is 25C')
      });
      it('When not in Power Saving Mode, should throw error if temperature over 32', function(){
        thermostat.switchMode();
        expect(function(){thermostat.increase(30)}).toThrowError('Maximum Temperature is 32C')
      });
    });
  });

});
