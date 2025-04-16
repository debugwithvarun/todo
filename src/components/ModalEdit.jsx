import React from 'react'
import "./Modal.css"
const Modal = ({onClose,addTodos}) => {

    
  const stop=(e)=>{
    e.stopPropagation()
  }

  return (
    <div className='window' onClick={onClose}>
      <div className='cross' onClick={onClose}>❌</div>
        <div className="Modal"  onClick={stop}>
            <input type="text"  placeholder='Enter Title' id='todoTitle'/>
            <textarea name="" id="tododesc" placeholder='write Description'></textarea>
            <button onClick={addTodos} className='btn btn2'>Submit</button>
            
        </div>
    </div>
  )
}

export default Modal