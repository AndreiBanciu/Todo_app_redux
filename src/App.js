import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, delTodo, updateTodo } from './features/Todos';

const App = () => {
  const todosList = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');
  const [editTodo, setEditTodo] = useState('');

  const addNewTodo = (param) => {
    dispatch(
      addTodo({ id: Math.floor(Math.random() * 100000), content: param })
    );
    setTodo('');
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="addTodos">
        <input
          value={todo}
          type="text"
          placeholder="Add todo..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        ></input>
        <button onClick={() => addNewTodo(todo)}>Add todo</button>
      </div>
      <div className="displayTodos">
        {todosList.map((todo, index) => {
          return (
            <div key={index}>
              <h2>{todo.content}</h2>
              <input
                type="text"
                placeholder="Edit todo"
                onChange={(e) => {
                  setEditTodo(e.target.value);
                }}
              ></input>
              <button
                onClick={() => {
                  dispatch(updateTodo({ id: todo.id, content: editTodo }));
                }}
              >
                Update Todo
              </button>
              <button
                onClick={() => {
                  dispatch(delTodo({ id: todo.id }));
                }}
              >
                Delete Todo
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
