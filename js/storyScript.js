$(document).ready(function() {

    // Stop Video Popup
    $("#videoToggle").click(function(event) {
        alert("In the final version, you would be able to see your AR Avatar after stopping the video, this was not possible in the scope of the prototype but you can test our AR Avatars in the Unity prototype on our Github.");  
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

    // Select Story 1
    $(".select").click(function(event) {
      document.getElementById("selectP").innerHTML="3 Votes";
      setTimeout( function() {
        document.getElementById("selectP").innerHTML="3 Votes - Winner!";
      }, 1000);
      setTimeout( function() {
        window.location.href = "story-1.html";
      }, 3000);
      event.preventDefault();
    });

    // Page 1 - Vote Option A
    $(".vote1A").click(function(event) {
      document.getElementById("vote1Ap").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="2 Votes";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote1Bp").innerHTML="1 Vote";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "story-2.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 1 - Vote Option B
    $(".vote1B").click(function(event) {
      document.getElementById("vote1Bp").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "story-2.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 2 - Vote Option A
    $(".vote2A").click(function(event) {
      document.getElementById("vote2Ap").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "story-3.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 2 - Vote Option B
    $(".vote2B").click(function(event) {
      document.getElementById("vote2Bp").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote2Ap").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "story-3.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 3 - Vote Option A
    $(".vote3A").click(function(event) {
      document.getElementById("vote3Ap").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="2 Votes";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="3 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="3 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "story-4.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 3 - Vote Option B
    $(".vote3B").click(function(event) {
      document.getElementById("vote3Bp").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "story-4.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 4 - Vote Option A
    $(".vote4A").click(function(event) {
      document.getElementById("vote4Ap").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote4Bp").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote4Bp").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote4Bp").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "story-5.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 4 - Vote Option B
    $(".vote4B").click(function(event) {
      document.getElementById("vote4Bp").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote4Bp").innerHTML="2 Votes";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote4Bp").innerHTML="3 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote4Bp").innerHTML="3 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "story-5.html";
      }, 8000);
      event.preventDefault();
    });

    // A SUMMER ROMANCE //

    // Select Story 2
    $(".selectB1").click(function(event) {
      document.getElementById("selectP1").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("selectP2").innerHTML="2 Votes - Winner!";
      }, 1000);
      setTimeout( function() {
        window.location.href = "storyB-1.html";
      }, 3000);
      event.preventDefault();
    });
    $(".selectB2").click(function(event) {
      document.getElementById("selectP2").innerHTML="3 Votes";
      setTimeout( function() {
        document.getElementById("selectP2").innerHTML="3 Votes - Winner!";
      }, 1000);
      setTimeout( function() {
        window.location.href = "storyB-1.html";
      }, 3000);
      event.preventDefault();
    });

    // Page 1 - Vote Option A
    $(".voteB1A").click(function(event) {
      document.getElementById("vote1Ap").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="2 Votes";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote1Bp").innerHTML="1 Vote";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "storyB-2.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 1 - Vote Option B
    $(".voteB1B").click(function(event) {
      document.getElementById("vote1Bp").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote1Ap").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "storyB-2.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 2 - Vote Option A
    $(".voteB2A").click(function(event) {
      document.getElementById("vote2Ap").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "storyB-3.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 2 - Vote Option B
    $(".voteB2B").click(function(event) {
      document.getElementById("vote2Bp").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote2Ap").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote2Bp").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "storyB-3.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 3 - Vote Option A
    $(".voteB3A").click(function(event) {
      document.getElementById("vote3Ap").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="2 Votes";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="3 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="3 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "storyB-4.html";
      }, 8000);
      event.preventDefault();
    });

    // Page 3 - Vote Option B
    $(".voteB3B").click(function(event) {
      document.getElementById("vote3Bp").innerHTML="1 Vote";
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="1 Vote";
      }, 2000);
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="2 Votes";
      }, 5000);
      setTimeout( function() {
        document.getElementById("vote3Ap").innerHTML="2 Votes - Winner!";
      }, 6000);
      setTimeout( function() {
        window.location.href = "storyB-4.html";
      }, 8000);
      event.preventDefault();
    });
});