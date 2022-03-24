import React from 'react';
import './TodoList.css'
const TodoList = (props) => {
    // let style = {
    //     color: "black",
    //     listStyleType: 'none'
    // }
    return (
        <ul id="todo_list">
            {props.todos.map((item,index) => (

                <li id="li" key={item.id} className={item.status ? "completed" : ""}>
                    <label class="checkbox style-f">
                    <input
                        onChange={() => props.changeStatus(item.id)}
                        type="checkbox"
                        />
                    <div class="checkbox__checkmark"></div>
                    </label>
                    {item.task}
                    <div className="butn">
                    <button id="buton" onClick={()=> props.handleDel(item.id)}>&times;</button>
                    <button id="buton_edit" onClick={()=> props.handleEdit(index)}>Edit</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;