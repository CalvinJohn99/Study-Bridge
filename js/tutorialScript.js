$(document).ready(function() {
    // Open Hand
    $("#openHand").click(function(event) {
      document.getElementById("name").innerHTML="Alex Citizen &#9995";

      setTimeout( function() {
        document.getElementById("name").innerHTML="Alex Citizen";
      }, 4000);
      event.preventDefault();
    });

    // Open Question
    $("#openAsk").click(function(event) {
        $("#textField").removeClass("hide");
        $("#textField").addClass("show");
		    event.preventDefault();
    });

    // Submit Question
    $("#textField a").click(function(event) {
        $("#textField").removeClass("show");
        $("#textField").addClass("hide");  
        event.preventDefault();
    });

    // Open Currency
    $("#openCurrency").click(function(event) {
      $("#currency").removeClass("hide");
      $("#currency").addClass("show");

      setTimeout( function() {
        window.location.href = "index.html";
      }, 4000);
      event.preventDefault();
    });

    // Upload Files
    $("#div-upload").click(function(event) {
      alert("This prototype doesn't support uploading files, but this will be present in the final version.");  
      event.preventDefault();
    });
    
});
