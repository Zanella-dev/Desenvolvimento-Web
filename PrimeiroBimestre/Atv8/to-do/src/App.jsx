import { useState } from 'react';
import './App.css'; // Importando o CSS para deixar bonito

export default function App() {
  // 1. Estado da Lista: Array vazio inicialmente
  const [tasks, setTasks] = useState([]);
  
  // 2. Estado do Input (Componente Controlado): Começa vazio
  const [inputValue, setInputValue] = useState('');

  // Função para adicionar uma nova tarefa
  const handleAddTask = (e) => {
    e.preventDefault(); // Evita que a página recarregue ao submeter o form
    
    // Verifica se o input não está vazio
    if (inputValue.trim() === '') return;

    // Criando o objeto da tarefa com ID único (usando Date.now() como pedido)
    const newTask = {
      id: Date.now(),
      text: inputValue
    };

    // Atualizando o estado de forma IMUTÁVEL (criando um novo array com as tarefas antigas + a nova)
    setTasks([...tasks, newTask]);
    
    // Limpando o input após adicionar
    setInputValue('');
  };

  // Função para remover uma tarefa
  const handleRemoveTask = (idToRemove) => {
    // Utilizando o .filter() para criar um novo array apenas com as tarefas que têm o ID diferente do que queremos remover
    const newTasks = tasks.filter(task => task.id !== idToRemove);
    
    // Atualizando o estado com a nova lista
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Minha To-Do List</h1>
      
      {/* Formulário para capturar o "Enter" ou clique no botão */}
      <form onSubmit={handleAddTask} className="input-group">
        <input 
          type="text" 
          value={inputValue} // Ligando o valor do input ao estado
          onChange={(e) => setInputValue(e.target.value)} // Atualizando o estado ao digitar
          placeholder="Digite uma nova tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Renderização da Lista */}
      <ul className="task-list">
        {tasks.map((task) => (
          // Usando o ID único na propriedade 'key'
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button 
              onClick={() => handleRemoveTask(task.id)} 
              className="btn-remove"
            >
              Remover
            </button>
          </li>
        ))}
        
        {/* Mensagem amigável se a lista estiver vazia */}
        {tasks.length === 0 && (
          <p className="empty-msg">Nenhuma tarefa por aqui! 🎉</p>
        )}
      </ul>
    </div>
  );
}