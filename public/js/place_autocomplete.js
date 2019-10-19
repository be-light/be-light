var input;
var autocomplete;
var geocoder;

var userLatitude;
var userLongitude;

var searchSubmitBtn;
var searchForm;

document.addEventListener("DOMContentLoaded", event => {
  input = document.querySelector(".input__place");

  geocoder = new google.maps.Geocoder();
  autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["geocode"]
  });
});
