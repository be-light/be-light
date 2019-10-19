class BeLightMaps {
  constructor() {
    if (!navigator.geolocation) {
      alert("위치 서비스를 허용 해주세요.");
      location.href = "/";
    }

    const latitude = this.getQueryString("latitude");
    const longitude = this.getQueryString("longitude");

    fetch(`/api/map/hosts?latitude=${latitude}&longitude=${longitude}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.createMarker(result);
      });
    window.initMap = this.initMap;
  }

  /* initialize google maps */
  initMap = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        },
        zoom: 10,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false
      });

      const latLng = new google.maps.LatLng(
        pos.coords.latitude,
        pos.coords.longitude
      );

      this.showCurrentPosition(latLng);
    });
  };

  /* GET  QueryString from URL */
  getQueryString = key => {
    const url = new URLSearchParams(window.location.search);
    return url.get(key);
  };

  /* Show Current Position with Marker */
  showCurrentPosition = latLng => {
    let marker = new google.maps.Marker({
      position: latLng,
      title: "My Position",
      map: this.map,
      draggable: false
    });

    this.showInfoWindow(marker);
  };

  /* Open info Window */
  showInfoWindow = marker => {
    let infoWindow = new google.maps.InfoWindow({
      content: "My Position"
    });

    infoWindow.open(this.map, marker);
  };

  /* Create Marker of Hosts*/
  createMarker = hosts => {
    for (let i = 0; i < hosts.length; i++) {
      let latLng = new google.maps.LatLng(
        Number.parseInt(hosts[i].hostLatitude),
        Number.parseInt(hosts[i].hostLongitude)
      );

      let marker = new google.maps.Marker({
        map: this.map,
        position: latLng,
        title: "Host",
        draggable: false,
        icon: "/svg/markerpin02.svg"
      });
    }
  };
}

export default new BeLightMaps();
