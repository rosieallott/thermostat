
$(document).ready(function() {
  var thermostat = new Thermostat();
  showThermometer();

  $(function(){
    $('#slider').change(function(){
      thermostat._temperature = this.value;
    });
    $('#slider').change();
  });

  $('#cityselect').change(function(){
    var city = $('#cityselect').val();
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b15f5f9da7b49eb2b3f5c00b679f6db9"
    $.get(url, function(data) {
      $('#current').text(Math.round(data.main.temp - 273));
    });
    $('#citydisplay').text(city);
  });

  document.getElementById('reset').onclick = function() {
    thermostat.resetTemperature();
    slider.value = thermostat._temperature;
  };

  document.getElementById('powersaving').onclick = function() {
    thermostat.switchPowerSaving();
  };

  function showThermometer() {
    $('#temperature').text(thermostat._temperature);
    $('#powersavingstatus').text(thermostat._powerSaving);
    $('#temperature').attr('class', thermostat.displayEfficiency());
  }

  $(document).click(function(){
    showThermometer();
  });
});
