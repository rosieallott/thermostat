
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#powersavingstatus').text(thermostat._powerSaving);

  $('#cityselect').change(function(){
    var city = $('#cityselect').val();
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b15f5f9da7b49eb2b3f5c00b679f6db9"
    $.get(url, function(data) {
      $('#current').text(Math.round(data.main.temp - 273));
    });
    $('#city').text(city);
  });

  $('#increase').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decrease').click(function() { getElementById('#decrease')
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
