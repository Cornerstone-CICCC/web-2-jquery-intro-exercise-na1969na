$(function () {
  $("#toggleButton").click(function () {
    $("#myParagraph").toggle();
  });

  $('#colorButton').click(function() {
    $('#colorDiv').css('background-color', 'yellow');
  });

  $('#addClassButton').click(function() {
    $('#classDiv').addClass('newClass');
  });
  $('#removeClassButton').click(function() {
    $('#classDiv').removeClass('newClass');
  });

  $('#fadeInButton').click(function() {
    $('#fadeDiv').fadeIn();
  });
  $('#fadeOutButton').click(function() {
    $('#fadeDiv').fadeOut();
  });

  $('#slideUpButton').click(function() {
    $('#slideDiv').slideUp();
  });
  $('#slideDownButton').click(function() {
    $('#slideDiv').slideDown();
  });
});
