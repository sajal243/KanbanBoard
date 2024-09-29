import React from 'react'

const TaskPopup = ({task, onClose}) => {
    if(!task)   return null;
  return (
    <div className="task-popup">
        <div className='task-popup-content'>
            <span className='close' onClick={onClose}>&times;</span>
            <h3>{task.title}</h3>
            <p>{task.descp}</p>
        </div>
    </div>
  )
}

export default TaskPopup