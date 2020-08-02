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

// //Carlo's local storage code
// var setBoxes = localStorage.getItem("textAreaBox");

//Create 9 rows
for (var theHour = 9; theHour < 18; theHour++) {
    var index = theHour - 9;

    var plannerRow = $("<div>");
    // plannerRow.attr("row-number", [theHour]);
    plannerRow.addClass("row");
    // plannerRow.attr("id", [theHour]);
  
    //Create 3 columns in each row
    var columnOne = $("<div>");
    columnOne.addClass("col-md-2");
    columnOne.addClass("timeCol justify-content-center mt-1 mb-1");

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
    if ((parseInt(moment().format('h')) + 12) === theHour) {
        textInput.addClass("present");
      } else if ((parseInt(moment().format('h')) + 12) > theHour) {
        textInput.addClass("past");
      } else {
        textInput.addClass("future");
      }
    
    columnTwo.append(textInput);

    var columnThree = $("<div>");
    columnThree.addClass("col-md-1");

    //create save button
    var saveButton = $("<button>");
    saveButton.attr("value", [theHour]);
    saveButton.attr("id", [theHour]);
    saveButton.addClass("btn saveBtn i:hover far fa-save fa-2x")
    columnThree.append(saveButton);

    //append columns and rows to container
    plannerRow.append(columnOne);
    plannerRow.append(columnTwo);
    plannerRow.append(columnThree);
    $(".container").append(plannerRow);
}
//end of for loop


// var textAreaBox = [{9:[]},{10:[]},{11:[]},{12:[]},{13:[]},{14:[]},{15:[]},{16:[]},{17:[]},{18:[]}];

// if (setBoxes !== null) {
//     var parsedSaved = JSON.parse(setBoxes)
//     textAreaBox = parsedSaved;
//   };

// for (var i = 0; i < textAreaBox.length; i++) {
//     if (typeof textAreaBox[i] == "string") {
//       $( "textarea[value="+ (i + 9) +"]" ).text(textAreaBox[i])
//     }
//   };

// $(".btn").on("click", function(event) {
//     event.preventDefault();
//     var saveButton = $(this).attr("value")
//     var textData = $( "textarea[value="+ saveButton +"]" ).val()
//     textAreaBox[saveButton - 9] = textData;
//     localData = localStorage.setItem("textAreaBox", JSON.stringify(textAreaBox))
// })


//Button Functions to push to local storage
var value = JSON.parse(localStorage.getItem("value")) || [];

$("#9").on("click", function() {
    userText = {
        line1: $("#0").val()
    }
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#10").on("click", function() {
    userText = {
        line2: $("#1").val(),
    }
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#11").on("click", function() {
    userText = {
        line3: $("#2").val(),
    }
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#12").on("click", function() {
    userText = {
        line4: $("#3").val(),
    }
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#13").on("click", function() {
    userText = {
        line5: $("#4").val(),
    }
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#14").on("click", function() {
    userText = {
        line6: $("#5").val(),
    }
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#15").on("click", function() {
    userText = {
        line7: $("#6").val(),
    }
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#16").on("click", function() {
    userText = {
        line8: $("#7").val(),
    }
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

$("#17").on("click", function() {
    userText = {
        line9: $("#8").val(),
    }
    
    value.push(userText);
    localStorage.setItem("value", JSON.stringify(userText));
})

// $("#0").val(JSON.parse(localStorage.getItem("0")));
