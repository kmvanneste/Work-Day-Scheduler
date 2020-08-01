// //Today's Date:
$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
});

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
    workTime.text(displayHour + " " + ampm);
    columnOne.append(workTime);

    var columnTwo = $("<div>");
    columnTwo.addClass("col-md-9");

    //Create text input box inside column two
    var textInput = $("<input>");
    textInput.addClass("textarea");
    textInput.addClass("form-control");
    textInput.attr("type", "text");
    columnTwo.append(textInput);

    var columnThree = $("<div>");
    columnThree.addClass("col-md-1");

    //create save button and push items to local storage
    var saveButton = $("<button>");
    saveButton.addClass("saveBtn i:hover");
    saveButton.addClass("btn");
    saveButton.addClass("far fa-save");

    saveButton.on("click", function() {
        var userText = textInput.value().trim();

        if (userText !== null){
        var storedPlans = JSON.parse(localStorage.getItem("storedPlans")) || [];
        storedPlans.push(userText);
        localStorage.setItem("storedPlans", JSON.stringify(storedPlans));
        }
    })

    columnThree.append(saveButton);

    //append columns and rows to container
    plannerRow.append(columnOne);
    plannerRow.append(columnTwo);
    plannerRow.append(columnThree);
    $(".container").append(plannerRow);
}
//end of for loop


