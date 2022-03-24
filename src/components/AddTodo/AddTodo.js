import React, { useState } from 'react';
import './AddTodo.css';

const AddTodo = (props) => {
    const [task, setTask] = useState('');

    const handleInput = (e) => {
        setTask(e.target.value)
    }

    const handleAdd = () => {
        const newTask = {
            task,
            status: false,
            id: Date.now()
        }
        if(newTask.task === ''||
        newTask.task===' '||
        newTask.task==='  '||
        newTask.task==='   '||
        newTask.task==='    '){
            alert('Please enter todo')
            setTask('')
            return;
        }else{
            props.handleTask(newTask)
            setTask('')
        }
    }

    return (
        <div className="inp_todo">
            <input id="inp_task" value={task} onChange={handleInput} type="text" />
            <button id="add_todo" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTodo;