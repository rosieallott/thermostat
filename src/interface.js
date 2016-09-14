
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#powersavingstatus').text(thermostat._powerSaving);

  $('#increase').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decrease').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving').click(function() {
    thermostat.switchPowerSaving();
    $('#powersavingstatus').text(thermostat._powerSaving);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.displayEfficiency());
  }
});
