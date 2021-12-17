import React from 'react'
import Todo from './Todo'
import '.././css/todo-container.css'

export default function ToDoContainer({todo, todos, setTodo, setTodos, messageShow, setMessageShow, addToDoOptions}) {
    return (
        <div className='todo-container'>
            <span></span>
            <Todo todo={todo} todos={todos} setTodos={setTodos} messageShow={messageShow} setMessageShow={setMessageShow} addToDoOptions={addToDoOptions} />
        </div>
    )
}