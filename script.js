// //Today's Date:
$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
})
//Global Variables
var currentTime = moment().format('h');
var currentTime = parseInt(currentTime);
var currentAmPm = moment().format('a');
console.log(currentAmPm);
console.log(currentTime);

//Create 9 rows
for (var theHour = 9; theHour < 18; theHour++) {
    index = theHour - 9;

    var plannerRow = $("<div>");
    // plannerRow.attr("row-number", [theHour]);
    plannerRow.addClass("row");
    // plannerRow.attr("id", [theHour]);
  
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
    } else if (theHour === 12) {
        displayHour = theHour;
        ampm = "pm"
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
   
    //Changing Color boxes due to time of day
    
    if (displayHour === 12){            
        if (displayHour === currentTime) {
            textInput.addClass("present");
        } else if (displayHour < currentTime && ampm !== currentAmPm) {
            textInput.addClass("future");
        } else {
            textInput.addClass("past");
        }
    } else {

    if (displayHour < currentTime && ampm === currentAmPm) {
       
        textInput.addClass("past");
        
    } else if (displayHour > currentTime && ampm !== currentAmPm ) {
        
        textInput.addClass("past");
        
    } else if (displayHour === currentTime && ampm === currentAmPm) {
 
        textInput.addClass("present");

    } else if (displayHour > currentTime && ampm === currentAmPm) {
       
        textInput.addClass("future");

    } else if (displayHour < currentTime && ampm !== currentAmPm) {
        
        textInput.addClass("future");  
    }
}   


    columnTwo.append(textInput);

    var columnThree = $("<div>");
    columnThree.addClass("col-md-1");

    //create save button
    var saveButton = $("<button>");
    saveButton.attr("id", theHour);
    saveButton.addClass("btn saveBtn i:hover far fa-save fa-2x")
    columnThree.append(saveButton);

    //append columns and rows to container
    plannerRow.append(columnOne);
    plannerRow.append(columnTwo);
    plannerRow.append(columnThree);
    $(".container").append(plannerRow);
}
//end of for loop


//Button Functions to push to local storage
$("#9").on("click", function() {
    userText = {
        line1: $("#0").val()
    }
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#10").on("click", function() {
    userText = {
        line2: $("#1").val(),
    }
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#11").on("click", function() {
    userText = {
        line3: $("#2").val(),
    }
    localStorage.setItem("value", JSON.stringify(value));
})

$("#12").on("click", function() {
    userText = {
        line4: $("#3").val(),
    }
    localStorage.setItem("value", JSON.stringify(value));
})

$("#13").on("click", function() {
    userText = {
        line5: $("#4").val(),
    }
    localStorage.setItem("value", JSON.stringify(value));
})

$("#14").on("click", function() {
    userText = {
        line6: $("#5").val(),
    }
    localStorage.setItem("value", JSON.stringify(value));
})

$("#15").on("click", function() {
    userText = {
        line7: $("#6").val(),
    }
    localStorage.setItem("value", JSON.stringify(value));
})

$("#16").on("click", function() {
    userText = {
        line8: $("#7").val(),
    }
    localStorage.setItem("value", JSON.stringify(value));
})

$("#17").on("click", function() {
    userText = {
        line9: $("#8").val(),
    }
    // var value = JSON.parse(localStorage.getItem("value")) || [];
    // value.push(userText);
    localStorage.setItem("value", JSON.stringify(value));
})

$("#0").val(JSON.parse(localStorage.getItem("0")));

//change background color depending on time
