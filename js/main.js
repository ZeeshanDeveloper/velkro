//main
//main
/*mbl-nav*/
$(".mbl-nav .box").click(function (e) {
    e.stopPropagation();
});
$(".mbl-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});


$("#story-opener").click(function () {
    $("#story-drop").addClass("block");
    $(".mbl-nav .norm").addClass("none");
});
$("#story-close").click(function () {
    $("#story-drop").removeClass("block");
    $(".mbl-nav .norm").removeClass("none");
});

$("#core-opener").click(function () {
    $("#core-drop").addClass("block");
    $(".mbl-nav .norm").addClass("none");
});
$("#core-close").click(function () {
    $("#core-drop").removeClass("block");
    $(".mbl-nav .norm").removeClass("none");
});

$("#service-opener").click(function () {
    $("#service-drop").addClass("block");
    $(".mbl-nav .norm").addClass("none");
});
$("#service-close").click(function () {
    $("#service-drop").removeClass("block");
    $(".mbl-nav .norm").removeClass("none");
});
/*
var x = document.getElementById("audioBackground");
x.play();
$(document).ready(function () {

    $(x).on('load', function () {

    });
});
*/