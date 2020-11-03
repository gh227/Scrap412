$(document).ready(function(){
    //error close button #0066ff
    $.validator.addMethod('emailCheck', function(value, element, regex){
      return this.optional(element) || regex.test(value);
    },
    "Please enter a valid email address");
    $('.errorbtn').click(function(){
    $(this).parent().hide('slow');
    });
    //focus input
    $('#fname').on({
      focus:function(){
      $('#fname-tag').css({'color':'#0066ff'});
      },
      blur:function(){
        $('#fname-tag').css({'color':'#595959'});
      },
      });
       $('#lname').on({
      focus:function(){
      $('#lname-tag').css({'color':'#0066ff'});
      },
      blur:function(){
        $('#lname-tag').css({'color':'#595959'});
      },
      });
        $('#email').on({
      focus:function(){
      $('#email-tag').css({'color':'#0066ff'});
      },
      blur:function(){
        $('#email-tag').css({'color':'#595959'});
      },
      });

       $('#password').on({
      focus:function(){
      $('#password-tag').css({'color':'#0066ff'});
      },
      blur:function(){
        $('#password-tag').css({'color':'#595959'});
      },
      });

      $('#confirm_password').on({
      focus:function(){
      $('#confirm_password-tag').css({'color':'#0066ff'});
      },
      blur:function(){
        $('#confirm_password-tag').css({'color':'#595959'});
      },
      });

  $validator = $('#register').validate({
    rules:{
      fname:{
        required:true,
        minlength:2,
      },
      lname:{
        required:true,
        minlength:2,
      },
      email:{
        required:true,
        emailCheck: /^[A-z0-9-_/]+@[A-z]+\.[A-z]+$/,
      },
      password:{
        required:true,
        minlength:8,
      },
      password_confirmation:{
        required:true,
        minlength:8,
        equalTo: "#password",
      },
    },
    messages:{
      fname:{
        required:"please enter first name",
        minlenth:"first name must be at least 2 charaters",
      },
      lname:{
        required:"please enter last name",
        minlength:"last name must be as least 2 charaters",
      },
      email:{
        required:"please enter username",
      },
      password:{
        required:"please enter password",
        minlength:"password must be at least 8 charaters",
      },
      password_confirmation:{
        required:"please enter confirm password",
        equalTo: "password does not match",
      },
    },
   
  });

  $('#login').validate({
    rules:{
      email:{
        required:true,
        emailCheck: /^[A-z0-9_-]+@[A-z]+\.[A-z]+$/,
      },
      password:{
        required:true,
      },
    },
    messages:{
      email:{
        required:"please enter an email",
      },
      password:{
        required:"please enter a password",
      },
    },
    
  });


  $('#register-button').click(function(e){
    if($('#register').valid()){
      e.preventDefault();
      $('#overlay').show();
      var _token = $("input[name = '_token']").val();
      var fname = $("input[name = 'fname']").val();
      var lname = $("input[name = 'lname']").val();
      var email = $("input[name = 'email']").val();
      var password = $("input[name = 'password']").val();
      var password_confirmation =  $("input[name='password_confirmation']").val();

      $.ajax(
      {
         url: "/register",
         type:'POST',
        data:{_token:_token, fname:fname, lname:lname, email:email,
         password:password, password_confirmation:password_confirmation },
         success: function(data){
          if(!($.isEmptyObject(data.errors))){
            $('li').remove();
            $('#overlay').hide();
            // Get the modal
            $('#reg-errors').css({'display':'block'});
            $.each(data.errors, function(index, value){
             $('ul').append('<li>'+ value +'</li>');
            }); 
            console.log(location.hostname);
          }
          else{
            window.location.replace('/');
          }
         },
         error:function(xhr, status, error){
          alert(xhr.responseText);
         },
      });
    }
  });


  //awaiting confirmation
   $('.moclose').click(function(){
                $('#reg-errors').css({'display':'none'});
              });
   var reg_errors = document.getElementById('reg-errors');
  window.onclick = function(event) {
  if (event.target == reg_errors) {
    reg_errors.style.display = "none";
  }
}
 
 //overlay display verify email
  //overlay display verify email and login
  $('#login-button').click(function(e){
      if($('#login').valid()){
      $('#overlay').show();
  }
  
  });

  $('#resend_verify').click(function(){
  $('#overlay').show();
    });
   
});
