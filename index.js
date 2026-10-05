const input = document.querySelector("input");
const botao = document.querySelector(".entrada button");
const lista = document.querySelector("ul");

botao.addEventListener("click", function () {

    const texto = input.value.trim();

    // Verifica se a tarefa está vazia
    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Cria a tarefa
    const tarefa = document.createElement("li");
    tarefa.innerText = texto;

    // Marcar como concluída
    tarefa.addEventListener("click", function () {
        tarefa.classList.toggle("concluida");
    });

    // Criar botão excluir
    const botaoExcluir = document.createElement("button");

    botaoExcluir.innerText = "Excluir";

    // Excluir tarefa
    botaoExcluir.addEventListener("click", function (event) {

        event.stopPropagation();

        tarefa.remove();

    });

    // Coloca o botão dentro da tarefa
    tarefa.appendChild(botaoExcluir);

    // Coloca a tarefa dentro da lista
    lista.appendChild(tarefa);

    // Limpa o campo
    input.value = "";
});