import React from 'react'

export default function TodoList({todofrommap, index, setTodos, messageShow, setMessageShow, setTodo, addToDoOptions}) {
    // if (todofrommap.heading === "" && todofrommap.text === "") {
    //     return (
    //         <>
    //         </>
    //     )
    // }
    const [changeFormInput, changeFormTextarea, blurOthers, unblurOthers, addToDoHandler, cancelAddToDoHandler, submitForm, editToDoHandler] = addToDoOptions;
    const deleteTodo = (e) => {
        // var todoParent;
        var locationFrom;
        if (e.target.classList.contains('fas')) {
            // todoParent = e.target.parentElement.parentElement.parentElement;
            locationFrom = e.target.parentElement.title;
        }else{
            // todoParent = e.target.parentElement.parentElement;
            locationFrom = e.target.title;
        }
        // console.log(todoParent);
        // todoParent.style.height = 0;
        // todoParent.style.opacity = 0;
        // todoParent.style.padding = 0;
        // todoParent.style.backgroundColor = '#228ef3';
        // todoParent.style.color = '#228ef3';
        // todoParent.querySelector('.todo-list-text').style.color = '#228ef3';
        // todoParent.querySelector('.todo-list-index').style.color = '#228ef3';
        if (locationFrom === "Delete") {
            setMessageShow({status: "success", text: "Deleted..."});

        }else if (locationFrom === "Mark as done") { 
            setMessageShow({status: "success", text: "Marked as done..."});
        }
        setTimeout(() => {
            setMessageShow({status: "", text: ""});
        }, 2000);
        setTodos(todos => todos.filter((todo, i) => i !== index));
    }
    const editToggle = (e) => {
        // setTodo({heading: todofrommap.heading, text: todofrommap.text});
        let todoIndex = e.target.dataset.id;
        console.log(todoIndex);
        document.querySelector('.atdb-submit').innerHTML = '<i class="fas fa-check"></i> Update';
        document.querySelector('.todo-form-heading').innerHTML = 'Edit To Do';
        document.querySelector('.atdb-submit').dataset.id = todoIndex;
        editToDoHandler(todoIndex);
    }

    let tempHeading = todofrommap.heading;
    if (todofrommap.heading.length>20) {
        tempHeading = todofrommap.heading.substring(0, 20) + "...";
    }
    return (
        <>
        <div className='todo-list'>
            <div className='todo-list-index'>
                {index+1}
            </div>
            <div className='todo-list-heading'>
                <h3 title={todofrommap.heading}>{tempHeading}</h3>
            </div>
            <div className='todo-list-text'>
                <p>
                    {todofrommap.text}
                </p>
            </div>
            <div className='todo-list-button-container'>
                <button className='todo-list-button' title='Edit' onClick={editToggle} data-id={index}><i className="fas fa-pencil-alt" data-id={index}></i></button>
                <button className='todo-list-button' title='Delete' onClick={deleteTodo}><i className="fas fa-trash-alt"></i></button>
                <button className='todo-list-button' title='Mark as done' onClick={deleteTodo}><i className="fas fa-check"></i></button>
            </div>
        </div>
        </>
    )
}
