
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
    $("#misc-link").click(function(){
        $("#content-container").load("miscellany.html")
    });
    $("#CV-link").click(function(){
        $("#content-container").load("CV.html")
    });
    $(document).on('click', "#blog-jacobian", function(){
        $("#content-container").html("<iframe id = jacobian-frame width = 700 height = 700 src='assets/blog/jacobian.html'></iframe>")
    });
});