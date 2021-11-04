function initMap() {
  let myLat = { lat: 50.4501, lng: 30.5234 };
  let mapOptions = {
    center: myLat,
    zoom: 7,
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}
///direction........

let directionsService = new google.maps.DirectionsService();
let directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);
