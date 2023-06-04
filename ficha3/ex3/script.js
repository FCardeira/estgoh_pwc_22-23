/* Até 3.5
function adicionaAluno(nome) {
    return "<tr><td>" + nome + "</td></tr>";   
}

document.getElementById("botao").addEventListener("click", function(evt) {
    var tabela = document.getElementById("tabela_alunos");
    var nome = document.getElementById("nome_aluno").value;
    tabela.innerHTML += adicionaAluno(nome);
}, false);

*/


/* 3.6 para a frente */
function adicionaAluno(aluno) {
    return "<tr><td>" + aluno.nome + "</td><td>" + aluno.idade + "</td><td>" + aluno.localidade + "</td><td>" + aluno.email + "</td></tr>";   
}

function adicionaAlunoTabela(aluno, tabela) {
    // Tabela é do tipo HTMLTableElement
    var novaLinha = tabela.insertRow();
    console.log(novaLinha);

    var celulaNome = novaLinha.insertCell();
    var celulaIdade = novaLinha.insertCell();
    var celulaLocalidade = novaLinha.insertCell();
    var celulaEmail = novaLinha.insertCell();

    celulaNome.innerHTML = aluno.nome;
    celulaIdade.innerHTML = aluno.idade;
    celulaLocalidade.innerHTML = aluno.localidade;
    celulaEmail.innerHTML = aluno.email;

    return novaLinha;
}


/* function adicionaAlunoTabela(aluno, tabela) {
    // Tabela é do tipo HTMLTableElement
    var novaLinha = document.createElement("tr");

    var celulaNome = document.createElement("td");
    var celulaIdade = document.createElement("td");
    var celulaLocalidade = document.createElement("td");
    var celulaEmail = document.createElement("td");

    celulaNome.innerHTML = aluno.nome;
    celulaIdade.innerHTML = aluno.idade;
    celulaLocalidade.innerHTML = aluno.localidade;
    celulaEmail.innerHTML = aluno.email;

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaIdade);
    novaLinha.appendChild(celulaLocalidade);
    novaLinha.appendChild(celulaEmail);

    tabela.appendChild(novaLinha);
} */

document.getElementById("botao").addEventListener("click", function(evt) {
    var tabela = document.getElementById("tabela_alunos");

    var aluno = {
        nome: document.getElementById("nome_aluno").value,
        idade: document.getElementById("idade_aluno").value,
        localidade: document.getElementById("localidade_aluno").value,
        email: document.getElementById("email_aluno").value
    }

    adicionaAlunoTabela(aluno, tabela);
}, false);