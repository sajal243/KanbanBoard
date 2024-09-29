import React from 'react'
import Task from './Task'

const Column = ({column, tasks, onDrop, onTaskClick}) => {

  const handleDragOver = (e) => {
      e.preventDefault();
  }

  const handleDrop = (e) => {

    // console.log(e)
    const taskId = e.dataTransfer.getData("taskId");
    onDrop(taskId, column.id);
  }

  return (
    <div className='column' onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="col-title"><h3>{column?.title}</h3></div>
      <div className='task-list'>
        {tasks?.map((task) => ( 
          <Task 
            key={task.id} 
            task={task}
            onClick={() => onTaskClick(task)} // passing click handler
        
          />))}
      </div>
    </div>
  )
}

export default Column