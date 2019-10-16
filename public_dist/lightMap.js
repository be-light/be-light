var map;
var geocoder;
var ZOOM = 12;
var prev_infowindow = false;

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
    });
  } else {
    alert("This browser is not support geolocation.");
  }

  geocoder = new google.maps.Geocoder();

  const input = document.getElementById("searchTextField");
  let autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["geocode"]
  });
}
/*
function createMarker(map, host) {
  let marker = new google.maps.Marker({
    map: map,
    position: {
      lat: Number.parseInt(host.hostLatitude),
      lng: Number.parseInt(host.hostLongitude)
    }
  });

  google.maps.event.addListener(marker, "click", function() {
    let infoWindow = new google.maps.InfoWindow({
      content: "Hello, Google Maps!"
    });

    if (prev_infowindow) prev_infowindow.close();
    prev_infowindow = infoWindow;

    infoWindow.open(map, marker);
  });
  return marker;
}*/

// Old Version

//var search__form = document.querySelector(".search__form");
//var search__text = document.querySelector(".search__text");

/* Search Address */
/*function findAddress(event) {
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
}*/

//search__form.addEventListener("submit", findAddress);
