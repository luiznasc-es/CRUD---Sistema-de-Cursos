document.getElementById('btnSalvarCurso').addEventListener("click", (e) => {
    e.preventDefault();
    const nomeCurso = document.getElementById("nomeCurso").value.trim();
    const professorCurso = document.getElementById("professorCurso").value.trim();
    const dataInicioCurso = document.getElementById("dataInicioCurso").value;
    const dataFimCurso = document.getElementById("dataFimCurso").value;

    if (!nomeCurso || !professorCurso || !dataInicioCurso || !dataFimCurso) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let cursos = JSON.parse(localStorage.getItem("cursos"));

    if (!cursos) {
        cursos = [];
    }

    cursos.push({
        nome: nomeCurso,
        professor: professorCurso,
        dataInicio: dataInicioCurso,
        dataFim: dataFimCurso
    });

    localStorage.setItem("cursos", JSON.stringify(cursos));
    
    document.getElementById("nomeCurso").value = "";
    document.getElementById("professorCurso").value = "";
    document.getElementById("dataInicioCurso").value = "";
    document.getElementById("dataFimCurso").value = "";

    listarCursos();
});

function listarCursos() {
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    document.getElementById("listaCursos").innerHTML = "";

    cursos.forEach((curso, indice) => {
        document.getElementById("listaCursos").innerHTML += `
        <div class="curso-card">
            <div class="curso-info">
                <strong>${curso.nome}</strong>
                <span>Professor: ${curso.professor}</span>
                <span>Início: ${curso.dataInicio}</span>
                <span>Fim: ${curso.dataFim}</span>
            </div>
            <div class="curso-acoes">
                <button onclick=carregarCurso(${indice}) class="btn-edit">Carregar</button>
                <button onclick=excluirCurso(${indice}) class="btn-excluir">Excluir</button>
            </div>
        </div>`;
    });
}

function excluirCurso(indice) {
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    cursos.splice(indice, 1);
    localStorage.setItem("cursos", JSON.stringify(cursos));
    listarCursos();
}

function carregarCurso(indice) {
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    const curso = cursos[indice];

    document.getElementById("nomeCurso").value = curso.nome;
    document.getElementById("professorCurso").value = curso.professor;
    document.getElementById("dataInicioCurso").value = curso.dataInicio;
    document.getElementById("dataFimCurso").value = curso.dataFim;
    document.getElementById("alterar").innerHTML = `<button class="btn-edit" onclick="alterarCurso(${indice})">Alterar</button>`;
}

function alterarCurso(indice) {
    let nomeCurso = document.getElementById("nomeCurso");
    let professorCurso = document.getElementById("professorCurso");
    let dataInicioCurso = document.getElementById("dataInicioCurso");
    let dataFimCurso = document.getElementById("dataFimCurso");
    if (!nomeCurso || !professorCurso || !dataInicioCurso || !dataFimCurso) {
        alert("Por favor, preencha todos os campos para atualizar.");
        return;
    }
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    cursos[indice].nome = document.getElementById("nomeCurso").value.trim();
    cursos[indice].professor = document.getElementById("professorCurso").value.trim();
    cursos[indice].dataInicio = document.getElementById("dataInicioCurso").value;
    cursos[indice].dataFim = document.getElementById("dataFimCurso").value;

    document.getElementById("alterar").innerHTML = "";
    localStorage.setItem("cursos", JSON.stringify(cursos));
    listarCursos();
}

listarCursos();
function fazerLogout(event) {
    event.preventDefault();
    // Limpa o usuário logado (depende de como você salvou no validacao.js, exemplo comum:)
    localStorage.removeItem("usuarioLogado"); 
    // Redireciona para o index do login
    window.location.href = "../login/index.html";
}