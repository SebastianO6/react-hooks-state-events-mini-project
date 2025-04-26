import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => {
        const {category, text} = task;
        return (
        <Task key={index} category={category} text={text} onDelete={onDelete} />
        );
      })}
    </div>
  );
}

export default TaskList;
