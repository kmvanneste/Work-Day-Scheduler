//Today's Date:
$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
})

//Global Variables
var plannerContainer = $(".container");
// var saveIcon = <i class="far fa-save"> </i>;

//Saving input to local storage
var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

//Clear existing elements in container
plannerContainer.empty();

//Create 9 rows
for (var hour = 9; hour < 18; hour++) {
    var plannerRow = $("<div>");
    plannerRow.attr("row-number", [hour]);
    plannerRow.addClass("row");
  
    //Create 3 columns in each row
    var columnOne = $("<div>");
    columnOne.addClass("col-md-2");
    columnOne.addClass("timeCol");

    //Create Time Element
    var workTime = $("<p>");
    workTime.addClass("time-block");
    var displayHour = 0;
    var ampm = "";
    if (hour > 12) {
        displayHour = hour - 12;
        ampm = "pm";
    } else {
        displayHour = hour;
        ampm = "am";
    }
    console.log(ampm);
    workTime.text(displayHour + " " + ampm);
    columnOne.append(workTime);

    var columnTwo = $("<div>");
    columnTwo.addClass("col-md-9");

    var columnThree = $("<div>");
    columnThree.addClass("col-md-1");

    //append columns and rows to container
    plannerRow.append(columnOne);
    plannerRow.append(columnTwo);
    plannerRow.append(columnThree);
    $(".container").append(plannerRow);
}



