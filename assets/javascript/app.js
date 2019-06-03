aboutMe = $("#bio-box");
portfolio = $("#portfolio")

portfolio.hide();

$(document).ready(function() {
    $(".contact-me").on("click", function () {
        $("#contactModal").modal("show");
    });

    $("#about-me").on("click", function() {
        aboutMe.show();
        portfolio.hide();
    })

    $("#portfolio-toggle").on("click", function() {
        aboutMe.hide();
        portfolio.show();
    });

});