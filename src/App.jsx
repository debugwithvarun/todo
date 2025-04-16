import React, { useState } from 'react'
import "../src/App.css"
import Navbar from './components/Navbar'
import Modal from './components/modal'
import TodoCard from './components/TodoCard'
const App = () => {
  const [showModal,setShowModal]=useState(false)
  

  const[todos,setTodos]=useState([])
  console.log(todos)

  const[view,setView]=useState("list")
  const addTodos=()=>{
    const todo={
      title:document.getElementById("todoTitle").value,
      desc:document.getElementById("tododesc").value
    }
    setTodos([...todos,todo ])
    handleCloseModal()
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleOpenModal = () => {
    setShowModal(true)
  }

  return (
    <div className='body'>
      <Navbar/>
      <div>
        <h1 className='title'>Todo</h1>  
      </div>
      <div className="btnConatiner">
      <button className='btn' onClick={handleOpenModal}>Create Todo</button>

        <button className='btn' onClick={()=>setView(view=="list"?"grid":"list")}>{view}</button>
      </div>

      {showModal && <Modal onClose={handleCloseModal} addTodos={addTodos} />}

      <TodoCard todos={todos} setTodos={setTodos} handleCloseModal={handleCloseModal} view={view}/>

    </div>
  )
}

export default App