import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import uuid from 'uuid/v4';

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

const storeTasks = (tasksMap) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksMap));
};

const getStoredTasks = () => {
  const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return tasksMap || { tasks: [], completedTasks: [] };
};

function Tasks() {
  const [taskText, setTaskText] = useState('');
  const initalTasks = getStoredTasks();

  const [tasks, setTasks] = useState(initalTasks.tasks);
  const [completedTasks, setCompletedTasks] = useState(
    initalTasks.completedTasks
  );

  const updateTaskText = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }]);
    setTaskText('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const completeTask = (completedTask) => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.id !== completedTask.id));
  };

  const deleteTask = (taskToDelete) => () => {
    setCompletedTasks(
      completedTasks.filter((task) => task.id !== taskToDelete.id)
    );
  };

  // console.log('tasks: ', tasks);
  // console.log('completedTasks: ', completedTasks);

  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  return (
    <div>
      <h3>Tasks</h3>
      <div action='' className='form'>
        <input
          type='text'
          value={taskText}
          onChange={updateTaskText}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='task-list'>
        {tasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id} onClick={() => completeTask(task)}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className='completed-list'>
        {completedTasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id}>
              {taskText}{' '}
              <span onClick={deleteTask(task)} className='delete-task'>
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
