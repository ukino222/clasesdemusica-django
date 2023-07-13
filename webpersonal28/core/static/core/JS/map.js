function initMap() {
    var address = "Ricardo Gutiérrez 3100, B1636 Vicente López, Provincia de Buenos Aires";
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: results[0].geometry.location
            });
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('No se encontró la dirección: ' + status);
        }
    });
}