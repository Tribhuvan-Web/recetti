import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todo, deleteTask, time }) => {
  return (
    <div>
      <section className="todo-list">
        <h1 className="mt-4 font-semibold text-blue-900">Your custom meal</h1>
        <div className="container">
          {todo && todo.length > 0 ? (
            todo.map((element) => {
              return (
                <ToDoItem
                  deleteTask={deleteTask}
                  element={element}
                  key={element.id}
                />
              );
            })
          ) : (
            <p className="mb-64 mt-4 first:text-red-600 font-semibold">
              You didn't created any custom meal.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ToDoList;
