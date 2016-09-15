
$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#powersavingstatus').text(thermostat._powerSaving);

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b15f5f9da7b49eb2b3f5c00b679f6db9", function(data) {
    $("#current").text(Math.round(data.main.temp - 273));

    // console.log(data.main.temp - 273);
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




// {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"},{"id":741,"main":"Fog","description":"fog","icon":"50d"}],"base":"stations","main":{"temp":295.8,"pressure":1009,"humidity":64,"temp_min":290.15,"temp_max":301.55},"visibility":10000,"wind":{"speed":4.1,"deg":40},"clouds":{"all":0},"dt":1473933951,"sys":{"type":1,"id":5091,"message":0.0443,"country":"GB","sunrise":1473917797,"sunset":1473963193},"id":2643743,"name":"London","cod":200}
