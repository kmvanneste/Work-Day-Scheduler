//Save to local storage
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".reservation").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});
$("#hr9 .reservation").val(localStorage.getItem("hr9"));
$("#hr10 .reservation").val(localStorage.getItem("hr10"));
$("#hr11 .reservation").val(localStorage.getItem("hr11"));
$("#hr12 .reservation").val(localStorage.getItem("hr12"));
$("#hr1 .reservation").val(localStorage.getItem("hr1"));
$("#hr2 .reservation").val(localStorage.getItem("hr2"));
$("#hr3 .reservation").val(localStorage.getItem("hr3"));
$("#hr4 .reservation").val(localStorage.getItem("hr4"));
$("#hr5 .reservation").val(localStorage.getItem("hr5"));

//Append current day to Jumbotron
$("#currentDay").text(moment().format("MMMM Do YYYY"));

//Change colors in text as day passes
var currentTime = moment().format("h:mm:ss a");
console.log(currentTime);

($(".timeslot").each(function() {
    if (this < currentTime) {
        $(this).addClass("past");
    } else if (this === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
  }
}))
