"use strict";

document.addEventListener("DOMContentLoaded", function(){
  var formElement = document.querySelector("[data-js='form-data']");
  var request = new XMLHttpRequest();

  request.addEventListener('load', function(e){
    var responseJSON  = JSON.parse(e.target.response);
    console.log(responseJSON);

    var objectStrings = "";
    responseJSON.forEach(function(inputData) {
      var inputHTML = "";
      if(inputData.type === "select"){
        objectStrings += "<select class='language'>";
        inputData.options.forEach(function(option) {
          inputHTML += `<option value="${option.value}">
          ${option.label}
          </option>`;
          });
      }else if (inputData.type === "textarea") {
        inputHTML += `<textarea class="formText"
                      placeholder="${inputData.label}">
                      </textarea>`;
      }else {
        inputHTML +=
        ` <input type="${inputData.type}"
          placeholder="${inputData.label}"
          id="${inputData.id}">
        `;
      };
      objectStrings += inputHTML;
    });
    formElement.innerHTML = objectStrings;
  });
 request.open("GET", "http://json-data.herokuapp.com/forms")
 request.send(null)
});
