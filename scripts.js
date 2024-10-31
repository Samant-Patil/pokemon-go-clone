document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add event listener for map clicks
    map.on('click', function(e) {
        alert("You clicked the map at " + e.latlng.toString());
    });

    // Function to capture Pokemon
    function capturePokemon(lat, lng) {
        // Placeholder function for capturing Pokemon
        console.log("Pokemon captured at: " + lat + ", " + lng);
    }

    // Add animation and interactive elements
    var marker = L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A wild Pokemon appears!')
        .openPopup();

    marker.on('click', function() {
        capturePokemon(marker.getLatLng().lat, marker.getLatLng().lng);
    });
});
