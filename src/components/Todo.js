import React from 'react'
import TodoList from './TodoList'
import Messages from './Messages';

export default function Todo({todo, setTodo, todos, setTodos, messageShow, setMessageShow, addToDoOptions}) {
    if (todos.length === 0) {
        // setMessageShow({status: "info", text: "No any Todos yet!"});
        return (
            <>
                <span></span>
            </>
        )
    }
    return (
        <>
            <div className='todo'>
                <div className='todo-group-heading'>Your Todo</div>
                {todos.map((todofrommap, index) =>{
                    return(
                        <TodoList todofrommap={todofrommap} index={index} key={index} setTodo={setTodo} setTodos={setTodos} messageShow={messageShow} setMessageShow={setMessageShow} addToDoOptions={addToDoOptions} />
                    )
                })}
            </div>
        </>
    )
}
