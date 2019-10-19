class BeLightMaps {
  constructor() {
    if (!navigator.geolocation) {
      alert("위치 서비스를 허용 해주세요.");
      location.href = "/";
    }
    this.prev_infowindow = false;

    const latitude = this.getQueryString("latitude");
    const longitude = this.getQueryString("longitude");

    fetch(`/api/map/hosts?latitude=${latitude}&longitude=${longitude}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
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

    setTimeout(() => {
      infoWindow.close();
    }, 3000);
  };

  /* Create Marker of Hosts*/
  createMarker = hosts => {
    for (let i = 0; i < hosts.length; i++) {
      let latLng = new google.maps.LatLng(
        Number.parseFloat(hosts[i].hostLatitude),
        Number.parseFloat(hosts[i].hostLongitude)
      );

      let marker = new google.maps.Marker({
        map: this.map,
        position: latLng,
        title: "Host",
        draggable: false
      });

      google.maps.event.addListener(marker, "click", () => {
        let infoWindow = new google.maps.InfoWindow({
          content: `
            <div class="info__window">
                <p class="info__window--hostName">${hosts[i].hostName}</p>
                <div class="info__window--block">
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
                </div>
               <p class="info__window--hostTel">${hosts[i].hostTel}</p>
               <p class="info__window--hostAddress">${hosts[i].hostAddress}</p>
                <div class="info__window--block">
                    Open <span class="info__window--hostOpenTime"> ${hosts[i].hostOpenTime}</span>
                    Close <span class="info__window--hostCloseTime">${hosts[i].hostCloseTime}</span>
                </div>

                <div class="info__window--buttons">
                    <input type="button" class="dropBtn info--btn" value="맡기기" idx="${hosts[i].hostIdx}"/>
                    <input type="button" class="getBtn info--btn" value="찾기" idx="${hosts[i].hostIdx}"/>
                </div>

               
            </div>
          `
        });

        if (this.prev_infowindow) this.prev_infowindow.close();
        this.prev_infowindow = infoWindow;

        infoWindow.open(this.map, marker);
      });
    }
  };
}

export default new BeLightMaps();
