"use strict";

document.addEventListener("DOMContentLoaded", function(){
  var formElement = document.querySelector("[data-js='form-data']");
  var request = new XMLHttpRequest();

  request.addEventListener('load', function(e){
    var responseJSON  = JSON.parse(e.target.response);
console.log(responseJSON);
    var objectStrings = "";
    responseJSON.forEach(function(inputData) {
      var inputHTML = `
        <input type="${inputData.type}">
      `;
      objectStrings += inputHTML;
    });
    formElement.innerHTML = objectStrings;
});
 request.open("GET", "http://json-data.herokuapp.com/forms")
 request.send(null)
});
