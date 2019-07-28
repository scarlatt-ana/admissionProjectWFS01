document.getElementById("botao2").addEventListener("click", function() {

let email = document.getElementById("input1").value,
    mensagem = '';

if ( !email ) {

    mensagem = 'Por favor, informe um endereço de e-mail.';

} else {

    mensagem = 'E-mail cadastrado com sucesso.';

}

    alert(mensagem);

});