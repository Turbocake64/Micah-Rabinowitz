const aboutMe = $("#bio-box");
const portfolio = $("#portfolio")

$(document).ready(function() {

    portfolio.hide();

    $(".contact-me").on("click", function () {
        $("#contactModal").modal("show");
        console.log("contact me!")
    });

    $("#about-me").on("click", function() {
        aboutMe.show();
        portfolio.hide();
    })

    $("#portfolio-toggle").on("click", function() {
        aboutMe.hide();
        portfolio.show();
    });

    $("form").on("submit", (event) => {
        event.preventDefault();

        const visitorName = $("#visitor-name").val().trim();
        const visitorEmail = $("#visitor-email").val().trim();
        const message = $("#message-text").val().trim();

        const data = {
            visitorName,
            visitorEmail,
            message
        };

        $.post('/email', data, function() {
            console.log("server received our data")
        });

        $('input[type="text"], textarea').val('');
        $('input[type="email"], textarea').val('')
        $("#contactModal").modal("hide");

    });

});