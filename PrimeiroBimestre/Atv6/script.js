
const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');


btnAdicionar.addEventListener('click', function() {
    const texto = inputTarefa.value.trim(); // Pega o texto e remove espaços vazios nas pontas

    
    if (texto === "") {
        return;
    }

    
    const li = document.createElement('li');
    const span = document.createElement('span');
    const checkbox = document.createElement('input');

    
    checkbox.type = 'checkbox';
    checkbox.classList.add('check-concluir');

    
    span.textContent = texto;
    span.classList.add('texto-tarefa');
    span.title = "Clique no texto para remover a tarefa"; 

    
    li.appendChild(checkbox);
    li.appendChild(span);

    
    listaTarefas.appendChild(li);

    
    inputTarefa.value = "";
    inputTarefa.focus();
});


listaTarefas.addEventListener('click', function(event) {
    
    
    const elementoClicado = event.target;

    
    if (elementoClicado.classList.contains('texto-tarefa')) {
        const liPai = elementoClicado.closest('li');
        liPai.remove();
    }
    
    
    else if (elementoClicado.classList.contains('check-concluir')) {
        const liPai = elementoClicado.closest('li');
        liPai.classList.toggle('concluida');
    }
});