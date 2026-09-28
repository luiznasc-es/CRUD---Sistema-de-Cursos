const CHAVE_USUARIOS = "usuarios";

function obterUsuarios() {
    const usuariosData = localStorage.getItem(CHAVE_USUARIOS);
    return usuariosData ? JSON.parse(usuariosData) : [];
}
function salvarUsuarios(usuarios) {
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));
}
function registrarUsuario(cpf, senha, nome, email) {
    const usuarios = obterUsuarios();

    if (usuarios.some(usuario => usuario.cpf === cpf)) {
        return { success: false, mensagem: "CPF já cadastrado." };
    }

    usuarios.push({ cpf, senha, nome, email });
    salvarUsuarios(usuarios);
    return { success: true, mensagem: "Usuário registrado com sucesso." };
}
function validarLogin(cpf, senha) {
    const usuarios = obterUsuarios();
    return usuarioEncontrado = usuarios.find(usuario => usuario.cpf === cpf && usuario.senha === senha) || null;
}
function exibirMensagem(texto, sucesso) {
    const mensagemText = document.getElementById("mensagem");
    if (!mensagemText) return;
    mensagemText.textContent = texto;
    mensagemText.style.color = sucesso ? "green" : "red";
}
function HandleRegister(event) {
    event.preventDefault();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const nome = document.getElementById("nome").value.trim();

    if (!cpf || !senha || !email || !nome) {
        exibirMensagem("Por favor, preencha todos os campos.", false);
        return;
    }

    const resultado = registrarUsuario(cpf, senha);
    exibirMensagem(resultado.mensagem, resultado.success);
    if (resultado.success) {
        setTimeout(() => {
            window.location.href = "../login/index.html";
        }, 2000);
    }
}
function HandleLogin(event) {
    event.preventDefault();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value.trim();
    
    const usuario = validarLogin(cpf, senha);
    if (usuario) {
        exibirMensagem("Login bem-sucedido!", true);
        setTimeout(() => {
            window.location.href = "../alunos/alunos.html";
        }, 1200);
    } else {
        exibirMensagem("CPF ou senha inválidos.", false);
    }
}