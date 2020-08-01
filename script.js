// //Today's Date:
$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

//Create 9 rows
for (var theHour = 9; theHour < 18; theHour++) {
    index = theHour - 9;

    var plannerRow = $("<div>");
    plannerRow.attr("row-number", [theHour]);
    plannerRow.addClass("row");
    plannerRow.attr("id", [theHour]);
  
    //Create 3 columns in each row
    var columnOne = $("<div>");
    columnOne.addClass("col-md-2");
    columnOne.addClass("mx-auto timeCol");

    //Create Time Element
    var workTime = $("<p>");
    workTime.addClass("time-block hour");
    var displayHour = 0;
    var ampm = "";
    if (theHour > 12) {
        displayHour = theHour - 12;
        ampm = "pm";
    } else {
        displayHour = theHour;
        ampm = "am";
    }
    workTime.text(displayHour + " " + ampm);
    columnOne.append(workTime);

    var columnTwo = $("<div>");
    columnTwo.addClass("col-md-9");

    //Create text input box inside column two
    var textInput = $("<input>");
    textInput.addClass("textarea form-control");
    textInput.attr("type", "text");
    textInput.attr("id", index);
    columnTwo.append(textInput);

    var columnThree = $("<div>");
    columnThree.addClass("col-md-1");

    //create save button and push to local storage
    var saveButton = $("<button>");
    saveButton.attr("id", theHour);
    saveButton.addClass("btn saveBtn i:hover far fa-save fa-2x")
    columnThree.append(saveButton);

    $("#theHour").on("click", function() {
    
        function saveText() {
            var userText = $(".textarea").val();
                
                if (userText !== "") {
                    var value = JSON.parse(localStorage.getItem("value")) || [];
                    var textObj = {
                        textInput: userText
                    };
                    value.push(textObj);
                    localStorage.setItem("value", JSON.stringify(value));
                }
            }
        
        function printText() {
            var value = JSON.parse(localStorage.getItem("value")) || [];
            return value;
            }

            saveText();
            


    })

    //append columns and rows to container
    plannerRow.append(columnOne);
    plannerRow.append(columnTwo);
    plannerRow.append(columnThree);
    $(".container").append(plannerRow);
}
//end of for loop
    
//Functions







})

