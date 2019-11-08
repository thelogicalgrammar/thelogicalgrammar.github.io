
$(function() {

    // set default
    $("#content-container").load("main.html");

    // put a bunch of links to update the page
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
    $("#CV-link").click(function(){
        $("#content-container").load("CV.html")
    });

});