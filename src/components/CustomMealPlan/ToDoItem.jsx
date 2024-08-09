import React, { useState } from "react";
import { toast } from "react-toastify";

const ToDoItem = ({ element, deleteTask }) => {
  const [buttonText, setButtonText] = useState("Mark as done");

  const markAsCompleted = () => {
    toast.success("meal completed");
    setButtonText("Meal cooked");
  };

  return (
    <>
      <div className="card h-full">
        <p className="font-semibold rounded-xl pl-2 ">
          <span>{element.text}</span> by <span> {element.setTime} </span>
        </p>
        <button onClick={() => deleteTask(element.id)}>Delete Task</button>
        <button
          onClick={() => markAsCompleted(element.id)}
          style={{ backgroundColor: "green" }}
        >
          {buttonText}
          <del>
            <span className="line-through">{setButtonText}</span>
          </del>
        </button>
      </div>
    </>
  );
};

export default ToDoItem;
