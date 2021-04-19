function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  
  
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
