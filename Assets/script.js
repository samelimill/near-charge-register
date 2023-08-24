// jQuery wrap
$(function () {
   
  // Function for save button, sends task and row id to local storage
  $('.saveBtn').click(function(){
    //sets row id as variable to be used as key for local storage
    var rowKey = $(this).parent().attr('id');
    //set user inputted tasks as variable to be saved as value for local storage 
    var textInput = $(this).siblings('.description').val();
    localStorage.setItem(rowKey, textInput);
  });

  //Compare fetched hour to rows, color coded for past/present/future
  $('.time-block').each(function (i){

    //Fetch current hour for comparison to sheet
    var currentHour = parseInt(dayjs().format('HH'));
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

    // Adds user input 
    var storedText = $(this).attr('id');
    console.log(storedText);
    $(this).children('.description').text(localStorage.getItem(storedText));
  });

  //Display current date on top of page
  $('#currentDay').text(dayjs().format('dddd, MMM D, YYYY'));
});
