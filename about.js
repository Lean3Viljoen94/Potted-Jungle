$("#LeaNadia").click(function () {
    console.log("click");
    $("#LeaNadia").fadeOut(5000).animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
});
$(document).ready(function () {
    $(".dropdown-toggle").dropdown();
});