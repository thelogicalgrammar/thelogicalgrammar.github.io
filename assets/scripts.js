
$(function() {

    $(".site-header").load("assets/header.html");
    $(".site-footer").load("assets/footer.html");

    $("#home-link").click(function(){
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