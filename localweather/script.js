///// USER LOCATION /////
$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

///// EXAMPLE CITY - CHANGE TO SEE OTHER BACKGROUNDS /////
// $(document).ready(function() {
//   loadWeather('London',''); 
// });

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      // if (weather.temp > 15) {
      //   $('body').animate({backgroundColor: '#F7AC57'}, 1500);
      // } else {
      //   $('body').animate({backgroundColor: '#0091c2'}, 1500);
      // }

      if (weather.temp <= 0) {
        $('body').css({background: 'url(img/snow_back.jpg) no-repeat center center fixed',
                      backgroundSize: "cover"});                      
      } else if (weather.temp > 0 && weather.temp < 15) {
        $('body').css({background: 'url(img/cool_back.jpg) no-repeat center center fixed',
                      backgroundSize: "cover"});
      } else if (weather.temp >= 15 && weather.temp <= 25) {
        $('body').css({background: 'url(img/stairs_back.jpg) no-repeat center center fixed',
                      backgroundSize: "cover"});
      } else if (weather.temp > 25 && weather.temp < 35) {
        $('body').css({background: 'url(img/sand_back.jpg) no-repeat center center fixed',
                      backgroundSize: "cover"});                  
      } else if (weather.temp >= 35) {
        $('body').css({background: 'url(img/desert_back.jpg) no-repeat center center fixed',
                      backgroundSize: "cover"});                 
      }

      html = '<h2><i class="icon-'+weather.code+'"></i> <span id ="c">'+weather.temp+'&deg;'+weather.units.temp+'</span><span id ="f" class="hidden">'+weather.alt.temp+'&deg;'+weather.alt.unit+'</span></h2>';
      html += '<ul><li>'+weather.city+', '+weather.country+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '</ul>';

      $("#weather").html(html);

      $("button").removeClass("hidden");
    },
    error: function(error) {
      $("#weather").html('<ul><li>'+error+'</li></ul>');
      $("#switch").addClass("hidden");
    }
  }); // end of $.simpleWeather  

} //end of function loadWeather

$("#switch").click(function() {
    $("#c").toggleClass("hidden");
    $("#f").toggleClass("hidden");
}); 

$("#location").click(function() {
    var newLocation = prompt("Which city?");
    loadWeather(newLocation,''); 
});

