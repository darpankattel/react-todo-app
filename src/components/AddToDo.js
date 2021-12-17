import React from 'react'
import '.././css/add-to-do.css'
import Messages from './Messages';

export default function AddToDo({todo, setTodo, todos, setTodos, messageShow, setMessageShow, addToDoOptions}) {
    const [changeFormInput, changeFormTextarea, blurOthers, unblurOthers, addToDoHandler, cancelAddToDoHandler, submitForm] = addToDoOptions;
    return (
        <>
        <div className='add-to-do-container'>
            <button className='add-to-do-button atdb' onClick={addToDoHandler}><span className='add-to-do-icon'><i className="fas fa-plus"></i></span>Add To Do</button>
            <div id='add-to-do-container-form'>
                <span className='close-todo-form' onClick={cancelAddToDoHandler}>
                    <i className="fas fa-times"></i>
                </span>
                <span className='todo-form-heading'>Add a new Todo</span>
                <form onSubmit={submitForm}>
                    <input type='text' placeholder='Heading' className='add-to-todo-input' value={todo.heading} onChange={changeFormInput} />
                    <textarea placeholder='Details'className='add-to-todo-textarea' onChange={changeFormTextarea} value={todo.text}></textarea>
                    <button className='add-to-do-button atdb-submit' type='submit'><i className='fas fa-plus'></i> Add</button>
                </form>
            </div>
        </div>
        </>
    )
}
