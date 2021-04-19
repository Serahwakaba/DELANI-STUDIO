$(document).ready(function(){
  
  $(".design").click(function () {
    $("#design-p").toggle();
    $("#design").toggle();
});
$(".development").click(function () {
    $("#dev-p").toggle();
    $("#dev").toggle();
});
$(".product").click(function () {
    $("#product-p").toggle();
    $("#product").toggle();
});
//portfolio

 $(".blk").hover(function () {
     $("#overlay1").toggle()
 });
 $(".mig").hover(function () {
    $("#overlay2").toggle()
});
$(".yellow").hover(function () {
    $("#overlay3").toggle()
});
$(".mus").hover(function () {
    $("#overlay4").toggle()
});
$(".ad").hover(function () {
    $("#overlay5").toggle()
});
$(".calc").hover(function () {
    $("#overlay6").toggle()
});
$(".log").hover(function () {
    $("#overlay7").toggle()
});
$(".bai").hover(function () {
    $("#overlay8").toggle()
});



    
$("#submit").click(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var mail = $("mail").val();
    var text = $("#text").val();

 if (name == "" || mail == "" || text == "") {
        alert("hi" + " " + name + " " + "we have recieved Your message .Thank you for reaching out to us")
    } else {
        alert("please make sure you have filled in the form correctly")
    }
})
});