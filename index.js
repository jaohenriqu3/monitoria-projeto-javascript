// Arquivo com as funçoes, que se comunica com as funções disponibilizadas pelo professor
// Aplicando diretamente no arquivo html 
// Mensagens.html 
// Admin.html 

function enviarMensagem(parametro) {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("mensagem").value

    var objeto = {}
    objeto = {'nome': nome, 'email': email, 'mensagem': mensagem}

    console.log('objeto', objeto);
    
    inserirMensagem(objeto)
}

function validaradmin(objLoginSenha){

    var emailLogin = document.getElementById("email_login").value
    var senhaLogin = document.getElementById("senha_login").value

    var objLoginSenha = {'email': emailLogin, 'senha': senhaLogin}
    var resultadoLogin = validarUsuario(objLoginSenha);

    if (resultadoLogin == true) {
        location.href="Mensagens.html"
    }
    else {
        alert('Usuário e senha incorretos!');
    }
}

function listarMensagens() {
    var mensagens = obterMensagens();

    console.log(mensagens);

    var tabela = document.getElementById("tabela-mensagens"); 

    var thead = "<thead>"+
    "<th>Nome</th>"+
    "<th>Email</th>"+
    "<th>Mensagem</th>"+
    "</thead>" 

var tbody = '<tbody>';
mensagens.forEach(function (loop) {
    tbody += "<tr>"+
    "<td>"+loop.nome+"</td>" +
    "<td>"+ loop.email+"</td>" +
    "<td>"+loop.mensagem+"</td>" +
    "</tr>";
})

tbody += '</tbody>'

document.getElementById("tabela").innerHTML = thead + tbody 
}
