import React, { useState } from "react";
import TimePicker from "react-time-picker";
import { toast } from "react-toastify";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const ToDoItem = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <h1 className="text-center text-slate-900  rounded-xl font-bold bg-teal-200 h-12 items-center flex justify-center mb-4">
        Add A Custom meal{" "}
      </h1>

      <input
        className="bg-gray-200 border-gray-400 text-gray-900 rounded-lg text-lg focus:ring-blue-500 focus:border-blue-500 pl-2 h-14 w-full"
        required
        type="text"
        value={text}
        placeholder="Add your meal"
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex mt-2 mr-4">
        <TimePicker onChange={setTime} value={time} />

        <button
          className="ml-4 bg-blue-600 text-white w-28 rounded-md"
          onClick={() =>
            text.length <= 0
              ? toast.warning("Cannot add an empty meal")
              : addTask(text, time)
          }
        >
          Add meal
        </button>
      </div>
    </>
  );
};

export default ToDoItem;
