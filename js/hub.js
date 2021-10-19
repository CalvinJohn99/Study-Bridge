$(document).ready(function() {
    $("#DECO3801").click(function(event) {
        alert("This page is currently unavailable.");  
		    event.preventDefault();
    });
    $("#CSSE3003").click(function(event) {
        alert("This page is currently unavailable.");  
		    event.preventDefault();
    });
    $("#INFS1200").click(function(event) {
        alert("This page is currently unavailable.");  
		    event.preventDefault();
    });    
    $("#lecture").click(function(event) {
        alert("This page is currently unavailable.");  
		    event.preventDefault();
    });
    $("#blackboard").click(function(event) {
        alert("This page is currently unavailable.");  
		    event.preventDefault();
    });
    $("#fullTable").click(function(event) {
        alert("This table is full. Please select a different table.");  
		    event.preventDefault();
    });
    $(".edit li a").click(function(event) {
        alert("To test out our AR Avatars, please download and try our Unity Project available on our Github.");  
		    event.preventDefault();
    });

    // Rewards Success
    $("#buy").click(function(event) {
        $("#rewardsSuccess").removeClass("hide");
        $("#rewardsSuccess").addClass("show");
        document.getElementById("spend").innerHTML="5 Currency";
		    event.preventDefault();
    });
    $("#buy2").click(function(event) {
        $("#rewardsSuccess").removeClass("hide");
        $("#rewardsSuccess").addClass("show");
        document.getElementById("spend").innerHTML="5 Currency";
		    event.preventDefault();
    });
});