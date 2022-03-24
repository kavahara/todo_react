import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import EditModal from './components/EditModal/EditModal';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  let [todos, setTodos] = useState([]);
  let [modal, setModal] = useState(false);
  let [editTodo, setEditTodo] = useState({});

  function handleTask(newObj){
    let newTodos = [...todos];

    newTodos.push(newObj)
    setTodos(newTodos)
  }

  function changeStatus(id){
    const newTodos = todos.map(item => {
      if(item.id === id){
        item.status = !item.status
      }
      return item
    })

    setTodos(newTodos)
  }

  function handleDel(id){
    let newTodos = todos.filter(item => item.id !==id)
    setTodos(newTodos)
  }

  function handleEdit(index){
    setModal(true)
    setEditTodo(todos[index])
  }

  function handleSaveTask(newTask){
    const newTodos = todos.map(item => {
      if(item.id === newTask.id){
        return newTask
      }
      return item
  })
  setTodos(newTodos)
  handleCloseModal()
}

function handleCloseModal(){
  setModal(false)
}
  return (
    <div className="app">
      <div className="container">
      <AddTodo
        handleTask={handleTask}
        />
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        handleDel={handleDel}
        handleEdit={handleEdit}
        />
      {modal ?
      <EditModal
      editTodo={editTodo}
      handleSaveTask={handleSaveTask}
      handleCloseModal={handleCloseModal}
      />
      : null}
      </div>
    </div>
  )
}

export default App;
