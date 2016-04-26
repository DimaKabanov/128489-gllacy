var contacts = document.querySelector(".map-contacts");
var btn = contacts.querySelector(".btn");
var feedbackForm = document.querySelector(".feedback-form");
var closeForm = document.querySelector(".feedback-form-close");
var name = feedbackForm.querySelector("[name=name]");

btn.addEventListener("click", function(event){
  event.preventDefault();
  feedbackForm.classList.add("feedback-form-show");
  name.focus();
});

closeForm.addEventListener("click", function(event){
  event.preventDefault();
  feedbackForm.classList.remove("feedback-form-show");
});

//map
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
