// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
   
  // Function for save button, sends task and row id to local storage
  $('.saveBtn').click(function(){
    //sets row id as variable to be used as key for local storage
    var rowKey = $(this).parent().attr('id');
    //set user inputted tasks as variable to be saved as value for local storage 
    var textInput = $(this).siblings('.description').val();
    localStorage.setItem(rowKey, textInput);
  });

  //Fetch current hour for comparison to sheet
  var currentHour = parseInt(dayjs().format('HH'));

  //Compare fetched hour to rows, color coded for past/present/future
  $('.row').each(function (i){
    //Pulls data-hour tag from each row and makes it a number instead of a string
    var rowHour = parseInt($(this).attr('id'));

    //Compares pulled tag against current hour and adds classes accordingly
    if (rowHour === currentHour){
      $(this).addClass('present');
    } else if (rowHour > currentHour) {
      $(this).addClass('future');
    } else if (rowHour < currentHour) {
      $(this).addClass('past');
    };
  });  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('.saveBtn').click(function()
    
  )
  
  //Display current date on top of page
  $('#currentDay').text(dayjs().format('dddd, MMM D, YYYY'));
 
});
