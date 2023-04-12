// Get the modal
var clickmode = 0;
var current_image = 0;
var total_image = 0;
var prefix = "";
var modal = document.getElementById("toyota_sepc");

// Get the button that opens the modal
var btn1 = document.getElementById("inside_view_ref");
// Get the button that opens the modal
var btn2 = document.getElementById("features_ref");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    $("#hotspot_image").attr("src", "images/hotspots/blank.jpg");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("#hotspot_image").attr("src", "images/hotspots/blank.jpg");
    }
}