var map;
var geocoder;
var ZOOM = 12;

/* Initialize Google Maps */
function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        },
        zoom: ZOOM,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false
      });

      /* Create Testing Marker */
      var marker = new google.maps.Marker({
        map: map,
        position: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });
    });
  } else {
    alert("This browser is not support geolocation.");
  }

  geocoder = new google.maps.Geocoder();
}

var search__form = document.querySelector(".search__form");
var search__text = document.querySelector(".search__text");

/* Search Address */
function findAddress(event) {
  event.preventDefault();
  geocoder.geocode(
    {
      address: search__text.value
    },
    (results, status) => {
      if (status === "ZERO_RESULTS") {
        alert("Cannot find Address.");
        return;
      }
      map.setCenter(results[0].geometry.location);
      map.setZoom(ZOOM);

      const pos = results[0].geometry.location;
      fetch(`/api/map/hosts?lat=${pos.lat()}&lng=${pos.lng()}`, {
        method: "GET"
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
        });
    }
  );
}

search__form.addEventListener("submit", findAddress);
