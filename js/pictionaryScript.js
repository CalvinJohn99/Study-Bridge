$(document).ready(function() {

    // Stop Video Popup
    $("#videoToggle").click(function(event) {
        alert("Turning off your video does not work in this prototype, to test out our AR Avatars, please download and try our Unity Project available on our Github.");  
		    event.preventDefault();
    });

    // Mic On
    $("#micOff").click(function(event) {
      $("#micOff").removeClass("show");
      $("#micOff").addClass("hide");
      $("#micOn").removeClass("hide");
      $("#micOn").addClass("show");
      event.preventDefault();
    });

    // Mic Off
    $("#micOn").click(function(event) {
      $("#micOn").removeClass("show");
      $("#micOn").addClass("hide");
      $("#micOff").removeClass("hide");
      $("#micOff").addClass("show");
      event.preventDefault();
    });
    
    // Open Reactions
    $("#openReactions").click(function(event) {
        $("#reactions").removeClass("hide");
        $("#reactions").addClass("show");
		    event.preventDefault();
    });

    // Heart React
    $("#rHeart").click(function(event) {
      $("#reactions").removeClass("show");
      $("#reactions").addClass("hide");
      document.getElementById("name").innerHTML="Alex Citizen &#128156";

      setTimeout( function() {
        document.getElementById("name").innerHTML="Alex Citizen";
      }, 4000);
      event.preventDefault();
    });

    // Clap React
    $("#rClap").click(function(event) {
      $("#reactions").removeClass("show");
      $("#reactions").addClass("hide");
      document.getElementById("name").innerHTML="Alex Citizen &#128079";

      setTimeout( function() {
        document.getElementById("name").innerHTML="Alex Citizen";
      }, 4000);
      event.preventDefault();
    });

    // Like React
    $("#rLike").click(function(event) {
      $("#reactions").removeClass("show");
      $("#reactions").addClass("hide");
      document.getElementById("name").innerHTML="Alex Citizen &#128077";

      setTimeout( function() {
        document.getElementById("name").innerHTML="Alex Citizen";
      }, 4000);
      event.preventDefault();
    });

    // Dislike React
    $("#rDislike").click(function(event) {
      $("#reactions").removeClass("show");
      $("#reactions").addClass("hide");
      document.getElementById("name").innerHTML="Alex Citizen &#128078";

      setTimeout( function() {
        document.getElementById("name").innerHTML="Alex Citizen";
      }, 4000);
      event.preventDefault();
    });

    // Pictionary 1
    setTimeout( function() {
      document.getElementById("guessers").innerHTML="Mary Guessed the Answer: 'Cat' &nbsp;&nbsp;&nbsp;";
      $("#guessers").addClass("correct");
      setTimeout( function() {
        window.location.href = "pictionary-2.html";
      }, 3000);
    }, 18000);

    // Pictionary 2
    $(".submit1").click(function(event) {
      let x = document.forms["boardForm"]["answer"].value;
      if (x == "Tree" || x == "tree") {
        document.getElementById("response").innerHTML="Correct!";
        setTimeout( function() {
          window.location.href = "pictionary-3.html";
        }, 2000);
      } else {
        document.getElementById("response").innerHTML="Try Again!";
        setTimeout( function() {
          document.getElementById("response").innerHTML="";
        }, 2000);
      }
      event.preventDefault();
    });

    // Pictionary 3
    $(".submit2").click(function(event) {
      let x = document.forms["boardForm"]["answer"].value;
      if (x == "Crown" || x == "crown") {
        document.getElementById("response").innerHTML="Correct!";
        setTimeout( function() {
          window.location.href = "pictionary-4.html";
        }, 2000);
      } else {
        document.getElementById("response").innerHTML="Try Again!";
        setTimeout( function() {
          document.getElementById("response").innerHTML="";
        }, 2000);
      }
      event.preventDefault();
    });

    // Pictionary 4
    $(".submit3").click(function(event) {
      let x = document.forms["boardForm"]["answer"].value;
      if (x == "Fish" || x == "fish") {
        document.getElementById("response").innerHTML="Correct!";
        setTimeout( function() {
          $("#newGame").removeClass("hide");
          $("#newGame").addClass("show");
        }, 2000);
      } else {
        document.getElementById("response").innerHTML="Try Again!";
        setTimeout( function() {
          document.getElementById("response").innerHTML="";
        }, 2000);
      }
      event.preventDefault();
    });

    // Stop 'Enter' Being Accepted on Forms
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
});