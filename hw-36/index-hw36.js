
// let map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

// function initMap() {
//   let myLat = { lat: 50.4501, lng: 30.5234 };
//   let mapOptions = {
//     center: myLat,
//     zoom: 7,
//   };
//   map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
// }
// ///direction........

// let directionsService = new google.maps.DirectionsService();
// let directionsDisplay = new google.maps.DirectionsRenderer();

// directionsDisplay.setMap(map);

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




// Google map
function initMap() {
  let myLat = { lat: 49.589082963382026, lng: 34.557623598157264 };
  let image = {
    url: "./beetroot-20x20.png",
    size: new google.maps.Size(20, 20),
  };
  let mapOptions = {
    // mapId: "8e0a97af9386fef",
    center: myLat,
    zoom: 17,
    mapTypeControl: false,
  };

  // Marker
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  let marker = new google.maps.Marker({position: myLat, map: map, icon: image, title: "Я Бурячок, не сомневайся",});

  // Info window
  const contentString =
    '<div id="content" class="map-title">' +
    '<div id="siteNotice" class="map-title__image">' +
    '<img src="./beetroot.jpg" alt="beetroot">' +
    "</div>" +
    '<div id="bodyContent" class="map-title__info">' +
    '<h1 id="firstHeading" class="firstHeading">BEETROOT</h1>' +
    "<p><b>Beetroot Academy Poltava</b>, Інтенсивні ІТ-курси в <b>Шведсько-українській IT-школі</b>, " +
    "Розвивай власну кар'єру разом з Beetroot Academy. " +   
    "де піклуються про кожного студента. " + 
    "Отримуй нові навички в дружній атмосфері</p><br>" +
    '<p>Attribution: Beetroot Academy Poltava<br>' +
    'Tel: <a target="_blank" href="tel:380931702777"> +38 (093) 17 02 777 </a> <br>' +
    'Address: вулиця Котляревського 2а, Полтава, Полтавська область, 36000 <br>' +
    '<a target="_blank" href="https://beetroot.academy/?utm_source=GMB&utm_medium=Organic">' +
    "SITE: Beetroot.academy</a> " +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}