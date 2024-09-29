
import './App.css';
import { cards } from './constants/data';
import Column from './components/Column';
import { useState } from 'react';
import TaskPopup from './components/TaskPopup';

function App() {

  const [data, setData] = useState(cards);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTodo = () => {
    const newTaskid = `task-${Object.keys(data.tasks).length + 1}`;
    const newTask = {
      id: newTaskid,
      title: newTaskid,
      descp: "Lorem"
    }

    const updatedTasks = {
      ...data.tasks,
      [newTaskid] : newTask
    }

    const updatedTodoColumn = {
      ...data.columns["col-1"],
      taskIds: [...data.columns["col-1"].taskIds, newTaskid]
    }

    const updateData = {
      ...data,
      tasks: updatedTasks,
      columns: {
        ...data.columns,
        "col-1": updatedTodoColumn
      }
    }

    setData(updateData);
  }

  const handleDrop = (taskId, targetColumnId) => {
    // const task = data.tasks[taskId];

    // Remove the task from its current column
    const sourceColumnId = Object.keys(data.columns).find(columnId =>
        data.columns[columnId].taskIds.includes(taskId)
    );

    // if same column donot move
    if(sourceColumnId === targetColumnId) return;

    // remove the task from its from source column
    const updatedSourceColumn = {
        ...data.columns[sourceColumnId],
        taskIds: data.columns[sourceColumnId].taskIds.filter(id => id !== taskId)
    };

    // add task to target column 
    const updatedTargetColumn = {
        ...data.columns[targetColumnId],
        taskIds: [...data.columns[targetColumnId].taskIds, taskId]
    };

    const updatedData = {
        ...data,
        columns: {
            ...data.columns,
            [sourceColumnId]: updatedSourceColumn,
            [targetColumnId]: updatedTargetColumn
        }
    };

    setData(updatedData);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task)
  }

  const closePopup = () => {
    setSelectedTask(null);
  }

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <button onClick={addTodo}>Add Todo</button>
      <div className='board'>
        {data?.columnOrder?.map((columnId) => {
          const column = data?.columns[columnId];
          const tasks = column?.taskIds?.map((taskId) => data?.tasks[taskId]);

          return <Column key={columnId} column={column} tasks={tasks} onDrop={handleDrop} onTaskClick={handleTaskClick} />
        })}
      
      </div>
      <TaskPopup task={selectedTask} onClose={closePopup} />
    </div>
  );
}

export default App;
