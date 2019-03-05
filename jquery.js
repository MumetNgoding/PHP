function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var alamat = $("#alamat").val();
 
    $.ajax({
        type: "POST",
        url: "http://172.16.10.58:3030/bukutamu",
        data: "name=" + name + "&email=" + email + "&alamat=" + alamat,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}