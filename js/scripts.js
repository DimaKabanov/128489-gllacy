function initialize() {
  var mapOptions = {
    scrollwheel: false,
    zoom: 17,
    center: new google.maps.LatLng(59.9389678,30.327000)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  var image = 'img/marker.png';
  var myLatLng = new google.maps.LatLng(59.9387100,30.323800);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
