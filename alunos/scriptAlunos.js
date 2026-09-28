document.getElementById('btn_aluno').addEventListener("click", (e) => {
    e.preventDefault(); // Evita o envio do formulário e o recarregamento da página
    let aluno_name = document.getElementById("name_aluno").value.trim();
    let aluno_email = document.getElementById("email_aluno").value.trim();
    let aluno_cpf = document.getElementById("cpf_aluno").value.trim();
    
    if (!aluno_name || !aluno_email || !aluno_cpf) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let lista = JSON.parse(localStorage.getItem("alunos"));

    if(!lista){ lista = []; }

    lista.push({
        nome: aluno_name, 
        email: aluno_email, 
        cpf: aluno_cpf
    });
    localStorage.setItem("alunos", JSON.stringify(lista));

    // Limpar os campos de entrada após adicionar o aluno
    aluno_name = document.getElementById("name_aluno").value = "";
    aluno_email = document.getElementById("email_aluno").value = "";
    aluno_cpf = document.getElementById("cpf_aluno").value = "";
    listar();
});
function listar(){
    let lista = JSON.parse(localStorage.getItem("alunos")) || [];
    const container = document.getElementById("p_aluno");
    container.innerHTML = ""; // Limpa o conteúdo existente antes de adicionar novos elementos
    lista.forEach((aluno, indice) => {
        container.innerHTML += `
        <div class="aluno-card">
            <div class="aluno-info">
                <strong>${aluno.nome}</strong>
                <p>${aluno.email}</p>
                <p>${aluno.cpf}</p>
            </div>
            <div class="aluno-actions">
                <button onclick="excluir(${indice})" class="btn-excluir">Excluir</button>
                <button onclick="atualizar(${indice})" class="btn-edit">Atualizar</button>
            </div>
        </div>`;
    });
}

function excluir(indice){
    let lista = JSON.parse(localStorage.getItem("alunos"));
    lista.splice(indice, 1);
    localStorage.setItem("alunos", JSON.stringify(lista));
    listar();
}

function atualizar(indice){
    let lista = JSON.parse(localStorage.getItem("alunos"));
    document.getElementById("name_aluno").value = lista[indice].nome;
    document.getElementById("email_aluno").value = lista[indice].email;
    document.getElementById("cpf_aluno").value = lista[indice].cpf;
    document.getElementById("alterar").innerHTML = `<button onclick =alterar(${indice}) class="btn-edit">Alterar</button>`;
}

function alterar(indice){
    let aluno_name = document.getElementById("name_aluno").value.trim();
    let aluno_email = document.getElementById("email_aluno").value.trim();
    let aluno_cpf = document.getElementById("cpf_aluno").value.trim();
    if (!aluno_name || !aluno_email || !aluno_cpf) {
        alert("Por favor, preencha todos os campos para atualizar.");
        return;
    }
    let lista = JSON.parse(localStorage.getItem("alunos"));
    lista[indice].nome = document.getElementById("name_aluno").value;
    lista[indice].email = document.getElementById("email_aluno").value;
    lista[indice].cpf = document.getElementById("cpf_aluno").value;

    document.getElementById("alterar").innerHTML = "";
    localStorage.setItem("alunos", JSON.stringify(lista));
    
    // Limpar os campos de entrada após a alteração
    document.getElementById("name_aluno").value = "";
    document.getElementById("email_aluno").value = "";
    document.getElementById("cpf_aluno").value = "";
    listar();
}function fazerLogout(event) {
    event.preventDefault();
    // Limpa o usuário logado (depende de como você salvou no validacao.js, exemplo comum:)
    localStorage.removeItem("usuarioLogado"); 
    // Redireciona para o index do login
    window.location.href = "../login/index.html";
}