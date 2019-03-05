$(document).ready(function(){
    $("#contact_form").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});
function submitForm(){
    var name=$('#name').val();
    var email=$('#email').val();
    var alamat=$('#alamat').val();
    var kelamin=$('#kelamin').val();
var dataString = 'name='+ name + '&email=' + email + '&alamat=' + alamat +'&kelamin' + kelamin;
  //alert (dataString);return false;
  $.ajax({
    type: "POST",
    url: "http://172.16.10.58:3030/bukutamu",
    data: dataString,
    success: function(data) {
        if (data){
            $('#contact_form').html("<div id='message'></div>");
      $('#message').html("<h2>Contact Form Submitted!</h2>")
      .append("<p>We will be in touch soon.</p>")
      .hide()
      .fadeIn(1500, function() {
        $('#message').append("<img id='checkmark' src='images/check.png' />");
      });
        }
      
    }
  });
  return false;
}
});
