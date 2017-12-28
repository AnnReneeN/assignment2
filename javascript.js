/*ORDER PAGE*/


(function(){

  let myName = document.getElementById("my-name");
  let userName = document.getElementById("user-name");
  let getName = document.getElementById("get-name");

  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
    ev.preventDefault();
  }

  getName.addEventListener("submit", PerformGreeting);

}());


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.507351, lng: -0.127758},
          zoom: 9
        });
      }
