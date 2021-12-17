import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddToDo from './components/AddToDo';
import ToDoContainer from './components/ToDoContainer';
import React, {useState} from 'react';
import Header from './components/Header';
import Messages from './components/Messages';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  let [todo, setTodo] = useState({heading: "", text:""});
  let [todos, setTodos] = useState([]);
  let [messageShow, setMessageShow] = useState({status: "", text: ""});
  // for AddToDo.js
  const changeFormInput = (e) => {
    setTodo({...todo, heading: e.target.value});
  }
  const changeFormTextarea = (e) => {
      setTodo({...todo, text: e.target.value});
  }
  const blurOthers = () => {
      // hide scrollbar
      document.body.style.overflow = 'hidden';
      document.querySelector('header').style.filter = 'blur(5px)';
      document.querySelector('.todo-container').style.filter = 'blur(5px)';
      document.querySelector('.navbar-container').style.filter = 'blur(5px)';
      document.querySelector('.atdb').style.filter = 'blur(5px)';
      document.querySelector('footer').style.filter = 'blur(5px)';
  }
  const unblurOthers = () => {
      // show scrollbar
      document.body.style.overflow = 'auto';
      document.querySelector('header').style.filter = 'blur(0px)';
      document.querySelector('.todo-container').style.filter = 'blur(0px)';
      document.querySelector('.navbar-container').style.filter = 'blur(0px)';
      document.querySelector('.atdb').style.filter = 'blur(0px)';
      document.querySelector('footer').style.filter = 'blur(0px)';
  }
  const addToDoHandler = (e) => {
      blurOthers();
      document.querySelector('.atdb-submit').innerHTML = '<i class=\'fas fa-plus\'></i> Add';
      document.querySelector('.todo-form-heading').innerHTML = 'Add a new Todo';
      document.getElementById('add-to-do-container-form').style.display = 'block';
      document.querySelector('.add-to-todo-input').focus();
  }
  const editToDoHandler = (e) => {
    blurOthers();
      let todoIndex = e;
      setTodo({heading: todos[todoIndex].heading, text: todos[todoIndex].text});
      document.getElementById('add-to-do-container-form').style.display = 'block';
      document.querySelector('.add-to-todo-input').focus();
    }
  const cancelAddToDoHandler = (e) => {
      setTodo({heading: "", text:""});
      document.querySelector('form').reset();
      console.log('Cancel Add To Do Handler Called')
      unblurOthers();
      document.getElementById('add-to-do-container-form').style.display = 'none';
  }
  const submitForm = (e) => {
      e.preventDefault();
      if (todo.heading === '' || todo.text === '') {
          cancelAddToDoHandler();
          e.target.querySelector('button').innerHTML = '<i class="fas fa-plus"></i> Add';
          setTodo({heading: '', text: ''});
          setMessageShow({status: 'error', text: 'Heading and Details are required'});
          setTimeout(()=>{
              setMessageShow({status: '', text: ''});
          }, 2000);
          return;
      }
      e.target.querySelector('button').innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      setTodo({heading: todo.heading, text: todo.text});
      let addOrUpdate;
      if (e.target.previousElementSibling.innerText !== 'Add a new Todo') {
          addOrUpdate = 'update';
        let todoIndex = e.target.querySelector('button').dataset.id;
        todos[todoIndex].heading = todo.heading;
        todos[todoIndex].text = todo.text;
        setTodos([...todos]);
      }
      else{
          addOrUpdate = 'add';
        setTodos([todo, ...todos]);
      }
      setTimeout(() => {
          setTodo({heading: '', text: ''});
          cancelAddToDoHandler();
          e.target.querySelector('button').innerHTML = '<i class="fas fa-plus"></i> Add';
          setMessageShow({status: 'success', text: addOrUpdate==="add"?'To Do Added Successfully':'To Do Updated Successfully'});
          setTimeout(() => {
              setMessageShow({status: '', text: ''});
          }, 2000);
      }, 800);
  }
  const addToDoOptions = [changeFormInput, changeFormTextarea, blurOthers, unblurOthers, addToDoHandler, cancelAddToDoHandler, submitForm, editToDoHandler];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className='main-todo-container'>
              <AddToDo todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}  messageShow={messageShow} setMessageShow={setMessageShow} addToDoOptions={addToDoOptions} />
              <ToDoContainer todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos}  messageShow={messageShow} setMessageShow={setMessageShow} addToDoOptions={addToDoOptions} />
            </main>
          } />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
        {messageShow.status.length>0 && <Messages status={messageShow.status} text={messageShow.text} />}
        <Footer />
      </Router>
    </>
  );
}

export default App;
