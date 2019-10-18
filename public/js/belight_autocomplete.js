var input;
var autocomplete;

var userLatitude;
var userLongitude;

document.addEventListener("DOMContentLoaded", function(event) {
  input = document.querySelector(".input__place");
  autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["geocode"]
  });

  /* Set LatLng */
  userLatitude = document.querySelector(".user__latitude");
  userLongitude = document.querySelector(".user__longitude");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      userLatitude.value = pos.coords.latitude;
      userLongitude.value = pos.coords.longitude;
    });
  }
});
