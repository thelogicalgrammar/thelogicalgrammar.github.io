
$(function() {

    $(".site-header").load("assets/header.html", function(){
        $("#home-link").click(function(){
            console.log("Test");
            $("#content-container").load("main.html")
        });
        $("#publications-link").click(function(){
            $("#content-container").load("publications.html")
        });
        $("#teaching-link").click(function(){
            $("#content-container").load("teaching.html")
        });
        $("#contact-link").click(function(){
            $("#content-container").load("contact.html")
        });
    });

    $(".site-footer").load("assets/footer.html");

});