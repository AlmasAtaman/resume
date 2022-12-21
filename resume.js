$(document).ready(function() {
    $("#showscreen").click(function() {
        $("#resumeholder").fadeIn("slow");
        $("#showscreen").hide();
        $("#footer").fadeIn("slow");
        $("#cards").hide();
    });

    $("#cp").click(function() {
        $("#showscreen").fadeIn("slow");
        $("#resumeholder").hide();
        $("#cards").hide();
    });

    $("#shigh").click(function() {
        $("#listhigh").fadeIn("slow");
        $("#cards").hide();
    });

    $("#srk").click(function() {
        $("#listrskill").fadeIn("slow");
        $("#cards").hide();
    });

    $("#sexp").click(function() {
        $("#listexp").fadeIn("slow");
        $("#cards").hide();
    });

    $("#cr").click(function() {
        $("#listhigh").hide();
        $("#listrskill").hide();
        $("#listexp").hide();
        $("#cards").hide();
    });

    $("#oc").click(function() {
        $("#resumeholder").hide();
        $("#showscreen").hide();
        $("#cards").fadeIn("slow");
    });

    $("#cc").click(function() {
        $("#cards").hide();
        $("#showscreen").fadeIn("slow");
    });

});