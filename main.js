$(document).ready(function() {
    $(".toggler").click(function() {
        let target = $(this).attr("target");
        $(target).fadeToggle();
    });

    $("#main-menu-wrapper").click(function() {
        $(this).fadeOut();
    });

    $("#main-menu").click(function(e) {
        e.stopPropagation();
    });
});