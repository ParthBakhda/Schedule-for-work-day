
  $(document).ready(function() {

    // Get the current hour as a number between 0 and 23
    var currentHour = moment().format("HH");
  
    // Set the date in the header of the page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  
    // Add a click event listener to the save button
    $(".saveBtn").on("click", function() {
      // Get the ID of the time-block that contains the save button
      var timeBlockId = $(this).closest(".time-block").attr("id");
  
      // Get the user input from the textarea inside the time-block
      var userInput = $(this).siblings("textarea").val();
  
      // Save the user input to localStorage using the time block ID as the key
      localStorage.setItem(timeBlockId, userInput);
    });
  
    // Loop through each time-block and apply the appropriate class
    $(".time-block").each(function() {
      var timeBlockHour = parseInt($(this).attr("id"));
  
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
  console.log($(this).attr("id"))
      // Get any saved user input from localStorage and set the textarea value
      var savedUserInput = localStorage.getItem($(this).attr("id"));
      if (savedUserInput) {
        $(this).find("textarea").text(savedUserInput);
      }
    });
  
  });
