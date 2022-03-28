// Estado de la aplicación.
let state = {
    primaryNumber: $('#primary-number'),
    secondaryNumber: $('#secondary-number'),
    resultado: $('#guess'),
    button: $('#btn'),
    alert: $('.alert'),
    correctAnswer: 0,    
}

// Generamos dos numeros aleatorios y generamos una respuesta a la suma de esos numeros.
function generateRandom(){
    let random1 = Math.floor(Math.random() * 10 + 1);
    let random2 = Math.floor(Math.random() * 10 + 1);
    
    state.primaryNumber.text(random1);
    state.secondaryNumber.text(random2);

    state.correctAnswer = random1 + random2;

    // Ocultamos el color del input
    state.resultado.removeClass("invalid");
    state.resultado.removeClass("valid"); 

}

// Mensaje que aparece y desaparece.
function toast(message, valid){
    state.alert.show(1000);
    state.alert.html(message);

    if(valid){
        state.alert.removeClass("invalid");
        state.alert.addClass("valid");
    }else{
        state.alert.removeClass("valid");
        state.alert.addClass("invalid");
    }

    setTimeout(function(){state.alert.hide(1000)}, 1500);

}

// Controlamos que el usuario haga click en el btn check.
state.button.click(function(){
    if(state.resultado.val() == state.correctAnswer){
        state.resultado.removeClass("invalid")
        state.resultado.addClass("valid");   
        toast(`👍 El resultado es correcto`, true);     
        generateRandom();
    }else{
        state.resultado.removeClass("valid")
        state.resultado.addClass("invalid");
        toast(`👎 El resultado es incorrecto`, false);
    }

})


// Generamos un numero aleatorio al inicio
generateRandom();