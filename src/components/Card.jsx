import React from 'react'
import "./TodoCard.css"
import { useState } from 'react'
import ModalEdit from './ModalEdit'
const Card = ({ index, title, desc, setTodos,todos }) => {
  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleCheckClick = () => {
    const a = document.querySelector(`#check-${index}`)
    if (a.innerText === "☑️") {
      a.innerText = "☐"
      a.style.fontSize = "20px";
    }
    else {
      a.innerText = "☑️"
      a.style.backgroundColor = "#3282B8";
      a.style.fontSize = "20px";
    }
  }


  const handleDeleteEvent = () => {
    const i = index
    setTodos((prevTodos) => {
      return prevTodos.filter((todo, index1) => {
        return index1 !== i
      }
      )
    })

  }

  const handleEditEvent = () => {
    const i = index
    const title = document.getElementById("todoTitle").value
    const desc = document.getElementById("tododesc").value
    console.log(title, desc,"varun")
    setTodos(() => {
      return todos.map((todo, indexl) => {
        if (indexl == i) return {
            title: title,
            desc: desc
          }
        else return todo
      })
    })
    handleCloseModal()
  }
  return (
    <div className="card">
      {showModal && <ModalEdit onClose={handleCloseModal} addTodos={handleEditEvent} />}
      <div className="upperCard">
        <h2 className='title'>{title}</h2>
        <div className="check" onClick={handleCheckClick} id={`check-${index}`}></div>
        {console.log(index)}
      </div>
      <div className="lowerCard">
        <p className='desc'>{desc}</p>
      </div>
      <div className="specialsection">
        <div onClick={handleDeleteEvent} id={`delete-${index}`}>🚮</div>
        <div onClick={() => { setShowModal(true) }} id={`edit-${index}`}>✏️</div>
      </div>
    </div>
  )
}

export default Card