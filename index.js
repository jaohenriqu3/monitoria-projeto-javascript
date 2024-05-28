// Arquivo com as funçoes, que se comunica com as funções disponibilizadas pelo professor
// Aplicando diretamente no arquivo html 
// Mensagens.html 
// Admin.html 

// Função para Envio de Mensagem, se comunicando com a função inserirMensagem -> funcoes.js 

//Pega os valores do html 
function enviarMensagem(parametro) {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("mensagem").value

    // Transforma os valores adquiridos em um objeto javascript 
    var objeto = {}
    objeto = {'nome': nome, 'email': email, 'mensagem': mensagem}

    // Imprime o resultado no console 
    console.log('objeto', objeto);

    // Comunica com função do "funcoes.js" consequentimente se comunicando com o arquivo JSON 
    inserirMensagem(objeto)
}

// Validação do usuario, se comunicando com o arquivo criado -> admin.html
function validaradmin(objLoginSenha){

    //Pega os valores do html -> admin.html
    var emailLogin = document.getElementById("email_login").value
    var senhaLogin = document.getElementById("senha_login").value

    // Transforma os valores adquiridos em um objeto javascript, objeto que será validado 
    var objLoginSenha = {'email': emailLogin, 'senha': senhaLogin}
    
    // Confere a validação dos dados adquiridos com a função validarUsuario -> funcoes.js 
    // Ultiliza o objeto criado acima para validação -> validarUsuario(objLoginSenha)
    var resultadoLogin = validarUsuario(objLoginSenha);

    // Logica da validação 
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
