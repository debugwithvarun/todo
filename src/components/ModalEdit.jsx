import React from 'react'
import "./Modal.css"
const Modal = ({onClose,addTodos,title,desc,SetCurrentTitle,SetCurrentDesc}) => {

    
  const stop=(e)=>{
    e.stopPropagation()
  }
  // console.log(title,desc)

  return (
    <div className='window' onClick={onClose}>
      <div className='cross' onClick={onClose}>❌</div>
        <div className="Modal"  onClick={stop}>
            <input type="text"  placeholder='Enter Title' id='todoTitle' value={title} onChange={(e)=>{return SetCurrentTitle(e.target.value)}}/>
            <textarea name="" id="tododesc" placeholder='write Description' value={desc} onChange={(e)=>{return SetCurrentDesc(e.target.value)}}></textarea>
            <button onClick={addTodos} className='btn btn2'>Submit</button>
            
        </div>
    </div>
  )
}

export default Modal
