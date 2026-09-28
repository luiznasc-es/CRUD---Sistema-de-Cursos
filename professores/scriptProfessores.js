document.getElementById('btn_env').addEventListener("click", (e) => {
    e.preventDefault();
    let cpf = document.getElementById("cpf").value;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (!cpf || !nome || !email) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let lista = JSON.parse(localStorage.getItem("professores"));

    if(!lista){ lista = []; }

    lista.push({cpf: cpf, nome: nome, email: email});
    localStorage.setItem("professores", JSON.stringify(lista));

    document.getElementById("cpf").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    listar();
});

function listar(){
    let lista = JSON.parse(localStorage.getItem("professores"));
    document.getElementById("professores").innerHTML = "";
    
    lista.forEach((prof, indice) => {
        document.getElementById("professores").innerHTML += `
        <table>
            <tr>
                <td>${prof.cpf} | ${prof.nome} | ${prof.email}</td>
                <td><button onclick=excluir(${indice}) class="btn-excluir">Excluir</button></td>
                <td><button onclick=carregar(${indice}) class="btn-edit">Carregar</button></td>
            </tr>
        </table>`;
    });
}

function excluir(indice){
    let lista = JSON.parse(localStorage.getItem("professores"));
    lista.splice(indice, 1);
    localStorage.setItem("professores", JSON.stringify(lista));
    listar();
}

function carregar(indice){
    let lista = JSON.parse(localStorage.getItem("professores"));
    document.getElementById("cpf").value = lista[indice].cpf;
    document.getElementById("nome").value = lista[indice].nome;
    document.getElementById("email").value = lista[indice].email;
    
    document.getElementById("alterar").innerHTML = `<button class="btn-edit" onclick="alterar(${indice})">Alterar</button>`;
}

function alterar(indice){
    let cpf = document.getElementById("cpf").value.trim();
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    if (!cpf || !nome || !email) {
        alert("Por favor, preencha todos os campos para atualizar.");
        return;
    }
    let lista = JSON.parse(localStorage.getItem("professores"));
    lista[indice].cpf = document.getElementById("cpf").value;
    lista[indice].nome = document.getElementById("nome").value;
    lista[indice].email = document.getElementById("email").value;

    document.getElementById("alterar").innerHTML = "";
    localStorage.setItem("professores", JSON.stringify(lista));
    listar();
}

listar();
function fazerLogout(event) {
    event.preventDefault();
    // Limpa o usuário logado (depende de como você salvou no validacao.js, exemplo comum:)
    localStorage.removeItem("usuarioLogado"); 
    // Redireciona para o index do login
    window.location.href = "../login/index.html";
}