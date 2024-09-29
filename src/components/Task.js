import React from 'react'

const Task = ({task, onClick}) => {
    const handleDragStart = (e) => {
        console.log(e)
        e.dataTransfer.setData("taskId", task.id)
    }

  return (
    <div className='task' draggable onDragStart={handleDragStart} onClick={onClick}>
        <div className='task-title'>{task?.title}</div>
        <div className='task-descp'>{task?.descp}</div>
    </div>
  )
}

export default Task