class BeLightMaps {
  constructor(map) {
    if (!navigator.geolocation) {
      alert("위치 서비스를 허용 해주세요.");
      location.href = "/";
    }

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
  getQueryString = () => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    console.log(url);
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
}

export default new BeLightMaps();
