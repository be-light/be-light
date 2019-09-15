var map;
var geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 37.5665,
            lng: 126.9780
        },
        zoom: 8
    });

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
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        })
    });

}

search__form.addEventListener("submit", findAddress)