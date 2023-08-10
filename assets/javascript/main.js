var searchButton = document.getElementById("searchButton");
var displayResults = document.querySelector(".map > div:last-child");

searchButton.addEventListener("click", function() {
    var zipCodeInput = document.getElementById("zipCode");
    var zipCode = zipCodeInput.value;

    console.log("User entered zipe code:", zipCode);

});



function initMap() {
    const myLatLng = {
      lat: 27.98325538635254,
      lng: -81.69874572753906
    };
    const map = new google.maps.Map(document.getElementById("gmp-map"), {
      zoom: 13,
      center: myLatLng,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "My location"
    });
  }

    