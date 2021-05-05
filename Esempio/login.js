

 function cambioForm(){
    console.log('Premuto cambioForm()');
    $('form.register-form').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('form.login-form').animate({height: "toggle", opacity: "toggle"}, "slow");
}

$(document).ready(function (){
    console.log('Documento caricato');
    $("p.message").click(cambioForm);
});



