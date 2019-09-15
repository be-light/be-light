var map;
var geocoder;
var ZOOM = 12;

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            map = new google.maps.Map(document.getElementById("map"), {
                center: {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                },
                zoom: ZOOM
            });

            var marker = new google.maps.Marker({
                map: map,
                position: {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                }
            });
        });
    } else {
        alert('This browser is not support geolocation.');
    }


    geocoder = new google.maps.Geocoder();
}

var search__form = document.querySelector(".search__form");
var search__text = document.querySelector(".search__text");

function findAddress(event) {
    event.preventDefault();
    geocoder.geocode({
        'address': search__text.value
    }, (results, status) => {
        if (status === "ZERO_RESULTS") {
            alert('Cannot find Address.');
            return;
        }
        map.setCenter(results[0].geometry.location);
        map.setZoom(ZOOM);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
    });

}

search__form.addEventListener("submit", findAddress)