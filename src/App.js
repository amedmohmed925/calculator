import React, { useEffect, useState } from 'react';
import HeaderMenu from './header';
import './index.css';

const TodoItem = ({ id, title, isDone, toggleDone, removeItem }) => (
  <div className="todo-item">
    <input type="checkbox" checked={isDone} onChange={() => toggleDone(id)} />
    <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
      {title}
    </span>
    <button onClick={() => removeItem(id)}>Delete</button>
  </div>
);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Load todos and search history from local storage or API
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = { id: Date.now(), title: newTodo, isDone: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo(''); // Clear the input field after adding the todo
      // Save to local storage or API
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    // Update local storage or API
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    // Update local storage or API
  };

  const addToSearchHistory = (searchTerm) => {
    setSearchHistory([...searchHistory, searchTerm]);
    // Save to local storage or API
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    // Clear from local storage or API
  };

  return (
    <div className="todo-app">
      <HeaderMenu loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <h1>To-Do App</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className='ptns'>
      <button onClick={() => addToSearchHistory(filter)}>Search</button>
      <button onClick={clearSearchHistory}>Clear History</button>
      </div>
      <div>
        {searchHistory.map((term, index) => (
          <div key={index}>{term}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        disabled={!loggedIn}
      />
      <button onClick={addTodo} disabled={!loggedIn}>Add Todo</button> {/* Add Todo button */}
      <div>
        {todos
          .filter(todo => todo.title.toLowerCase().includes(filter.toLowerCase()))
          .map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleDone={toggleDone}
              removeItem={removeTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoApp;