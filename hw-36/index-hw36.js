
// let map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

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

// function calcRoute() {
//   let request = {
//     origin: document.getElementById("from").value,
//     destination: document.getElementById("to").value,
//     travelMode: google.maps.TravelMode.DRIVING,
//     unitSystem: google.maps.UnitSystem.METRIC,
//   };

//   directionsService.route(request, (result, status) => {
//     if (status == google.maps.DirectionsStatus.OK) {
//       const output = document.querySelector("#output");
//       output.innerHTML =
//         "<div>From: " +
//         document.getElementById("from").value +
//         ".<br/>To: " +
//         document.getElementById("to").value +
//         ".<br/> Driving Distance: " +
//         result.routes[0].legs[0].distance.text;

//       directionsDisplay.setDirections(result);
//     } else {
//       directionsDisplay.setDirections({ routes: [] });

//       map.setCenter(myLat);

//       output.innerHTML =
//         '<div class="alert-danger"><i class=""fas fa-exclamation-triangle></i>Could not retrieve driving distance.</div>';
//     }
//   });
// }
// let calc = document.querySelector(".btn").addEventListener("click", calcRoute);
