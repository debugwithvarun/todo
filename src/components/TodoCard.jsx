import React from 'react'
import "./TodoCard.css"
import Card from './Card'
// import { useState } from 'react'-
const TodoCard = ({todos,setTodos,view,handleCloseModal}) => {
  const flexColumn={display:"flex",flexDirection:"column"}
  const flexrow={display:"flex",flexDirection:"row"}

  return (
    <section className="cardContainer" style={view==="list"?flexColumn:flexrow}>
        
     {todos.map((todo,index)=>(
      <Card index={index} todos={todos} title={todo.title} desc={todo.desc} setTodos={setTodos} handleCloseModal={handleCloseModal}/>
     ))}
    </section>
  )
}

export default TodoCard