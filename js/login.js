$(document).ready(function() {
  $('#email-check').on('input', function() {
    var input=$('#email-check').val();
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!re.test(input)){
      $('#email-error').removeClass('hide');/* $('#fn').css('border-color','red');*/
    }
    else{
      $('#email-error').addClass('hide');
    }
    

  });
    $("#password-check").keypress(function(){
    var pass = $('#password-check').val();
    var nameregex = /^[a-zA-Z0-9.@#$]{5,8}$/;
    if(!nameregex.test(pass)){
      $('#password-error').removeClass('hide');/* $('#fn').css('border-color','red');*/
    }
    else{
      $('#password-error').addClass('hide');
    }
  });
  $("#submit").click(function(){
    alert("please fill all the fields.");
  }); 

});