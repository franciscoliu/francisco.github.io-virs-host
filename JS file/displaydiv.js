$(function() {
    $("#add").click(function() {
        var div = document.createElement('div');
        $(div).addClass("inner").html("hello");
        $('#info').append(div);
    });
});