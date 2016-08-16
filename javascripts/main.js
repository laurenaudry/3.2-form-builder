"use strict";

document.addEventListener("DOMContentLoaded", function(){
  var request = new XMLHttpRequest();

  var names = document.querySelectorAll(".label")

  request.addEventListener('load', function(e){
    var responseJSON  = JSON.parse(e.target.response);

    var listHTML = "";


});
 request.open("GET", "http://json-data.herokuapp.com/forms")
 request.send(null)
});
