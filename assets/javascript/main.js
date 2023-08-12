var searchButton = document.getElementById("searchButton");
var displayResults = document.querySelector(".map > div:last-child");

searchButton.addEventListener("click", function() {
    var zipCodeInput = document.getElementById("zipCode");
    var zipCode = zipCodeInput.value;

    console.log("User entered zipe code:", zipCode);

});

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "7529ca942338d272",
    center: { lat: 28, lng: -81.7 },
    zoom: 11,
  });
}

window.initMap = initMap;