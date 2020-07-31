//Today's Date:
$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
})

//Create 9 rows
for (var hour = 9; hour < 18; hour++) {
    var plannerRow = $("<div>");
    plannerRow.attr("row-number", [hour]);
    plannerRow.addClass("row");
  
//Create 3 columns in each row
    var columnOne = $("<div>");
    columnOne.addClass("col-md-2");

    var columnTwo = $("<div>");
    columnTwo.addClass("col-md-9");

    var columnThree = $("<div>");
    columnThree.addClass("col-md-1");

    plannerRow.append(columnOne);
    plannerRow.append(columnTwo);
    plannerRow.append(columnThree);
    $(".container").append(plannerRow);
}

