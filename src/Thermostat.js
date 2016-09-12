function Thermostat(){
  this.temperature = 20;
  this.isPowerSaving = true;
  this.maxTemp = {true: 25, false: 32}
};

Thermostat.prototype.increase = function (amount = 1) {
  if(this.temperature + amount > this.maxTemp[this.isPowerSaving]) {
    throw new Error('Maximum Temperature is '+ this.maxTemp[this.isPowerSaving] +'C')
  }
  else {
    this.temperature += amount;
  }
};

Thermostat.prototype.decrease = function (amount = 1) {
  if (this.temperature - amount < 10){
    throw new Error('Minimum Temperature is 10C')
  }
  else {
    this.temperature -= amount;
  }
};

Thermostat.prototype.switchMode = function () {
  this.isPowerSaving = !this.isPowerSaving
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if(this.temperature < 18){
    return 'low-energy';
  }
  else if (this.temperature < 25){
    return 'medium-energy';
  }
  else {
    return 'high-energy';
  }
};
