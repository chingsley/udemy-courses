import React, { useState, useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
import uuid from "uuid/v4";

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";

const TYPES = {
  ADD_TASK: "ADD_TASK",
  COMPLETE_TASK: "COMPLETE_TASK",
  DELETE_TASK: "DELETE_TASK",
};

const tasksReducer = (state, action) => {
  console.log("action: ", action);
  console.log("state: ", state);
  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case TYPES.COMPLETE_TASK:
      return {
        ...state,
        completedTasks: [...state.completedTasks, action.completedTask],
        tasks: state.tasks.filter(
          (task) => task.id !== action.completedTask.id
        ),
      };
    case TYPES.DELETE_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter(
          (task) => task.id !== action.taskToDelete.id
        ),
      };
    default:
      return state;
  }
};

const getStoredTasks = () => {
  const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return tasksMap || { tasks: [], completedTasks: [] };
};

const storeTasks = (tasksMap) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksMap));
};

function Tasks() {
  const [taskText, setTaskText] = useState("");

  const storedTasksState = getStoredTasks();
  const [state, dispatch] = useReducer(tasksReducer, storedTasksState);

  const updateTaskText = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    const task = { taskText, id: uuid() };
    dispatch({ type: TYPES.ADD_TASK, task });
    setTaskText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const completeTask = (completedTask) => {
    dispatch({ type: TYPES.COMPLETE_TASK, completedTask });
  };

  const deleteTask = (taskToDelete) => () => {
    dispatch({ type: TYPES.DELETE_TASK, taskToDelete });
  };

  useEffect(() => {
    storeTasks({ tasks: state.tasks, completedTasks: state.completedTasks });
  });

  return (
    <div>
      <h3>Tasks</h3>
      <div action="" className="form">
        <input
          type="text"
          value={taskText}
          onChange={updateTaskText}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {state.tasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id} onClick={() => completeTask(task)}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {state.completedTasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id}>
              {taskText}{" "}
              <span onClick={deleteTask(task)} className="delete-task">
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
