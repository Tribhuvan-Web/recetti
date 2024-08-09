import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ToDoItem from "../CustomMealPlan/ToDoItem";
import ToDoList from "../CustomMealPlan/ToDoList";
import "react-toastify/dist/ReactToastify.css";

const CustomMealPlan = () => {
  //Use state to set the custom meal
  const [todo, setToDo] = useState([]);

  //Use Effect hook stored meal in local storage , So it will be helpful to user when he will return to the page then there is their saved data

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem("todos")) || [];
    setToDo(storedToDos);
  }, []);

  //Adding the custom meal plan functionality
  const addTask = (text, setTime) => {
    const newTask = {
      id: Date.now(),
      text,
      setTime,
    };

    setToDo(todo.unshift(newTask));
    localStorage.setItem("todos", JSON.stringify(todo));
    toast.success("Successfully added");
    setToDo(JSON.parse(localStorage.getItem("todos")));
  };

  //Deleting the custom meal
  const deleteTask = (id) => {
    const filteredTodos = todo.filter((item) => item.id !== id);
    toast.warning("meal deleted");
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setToDo(filteredTodos);
  };

  return (
    <>
      <ToDoItem addTask={addTask} />
      <ToDoList todo={todo} deleteTask={deleteTask} />
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
};

export default CustomMealPlan;
