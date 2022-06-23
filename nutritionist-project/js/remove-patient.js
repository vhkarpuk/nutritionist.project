var patients = document.querySelectorAll(".patient");

var chart = document.querySelector("#chart-patients");

chart.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
