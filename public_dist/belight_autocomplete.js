var input;
var autocomplete;
document.addEventListener("DOMContentLoaded", function(event) {
  input = document.querySelector(".input__place");
  autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["geocode"]
  });
});
