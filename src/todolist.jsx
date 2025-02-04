import React from "react";
import { useState } from "react";

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleremoveTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim()) {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} 
                        <button onClick={() => handleremoveTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;