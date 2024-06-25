import React, { useEffect, useRef, useState } from "react";

import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import gsap from "https://esm.sh/gsap";

import { Updatetodo, addTodo } from "../slices/todoslice";
import Button from "./Button";

function Model({ type, model, setmodel, todo }) {
  const [id, setid] = useState(0);
  const [title, settitle] = useState("");
  const [status, setstatus] = useState("incomplete");

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      settitle(todo.title);
      setstatus(todo.status);
    } else {
      settitle("");
      setstatus("incomplete");
    }
    if (document.querySelector(".showdisplay")) {
      gsap.to(".showdisplay", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.4,
      });
    }
  }, [type, todo, model]);

  /**
   * Add Task in Todo list
   */
  const submitHandle = (e) => {
    e.preventDefault();
    setid(id + 1);
    if (title && status) {
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(Updatetodo({ ...todo, title, status }));
          toast.success("Task Updated Successfully");
        } else toast.error("NO Change Made");
      } else {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleDateString(),
          })
        );
        toast.success("Task Added Successfully");
      }
      setmodel(false);
      settitle("");
    } else toast.error("Title shouldn't be empty");
  };

  const container = useRef();

  return (
    model && (
      <div
        ref={container}
        className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-black/25 z-50"
      >
        <div className="showdisplay translate-y-10">
          <div className="w-96 flex justify-end">
            <button
              onClick={() => setmodel(false)}
              onKeyDown={() => setmodel(false)}
              className="bg-gray-200 w-7 h-7 rounded-lg animate-bounce font-bold mb-2 duration-700 hover:bg-red-500 hover:text-white"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="bg-gray-200 h-fit w-96 rounded-lg p-5">
            <div className="text-center text-2xl">
              {type === "update" ? "Update" : "Add"} Task
            </div>
            <form
              onSubmit={submitHandle}
              className="flex flex-col justify-between gap-5"
            >
              <label htmlFor="title">
                Title
                <input
                  id="title"
                  className="h-10 border-2 border-black w-full p-2 text-lg rounded-lg"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                ></input>
              </label>
              <label>
                Status
                <select
                  name="status"
                  id="status"
                  className="w-full h-10"
                  value={status}
                  onChange={(e) => setstatus(e.target.value)}
                >
                  <option value="incomplete">incomplete</option>
                  <option value="complete">complete</option>
                </select>
              </label>
              <div className="flex flex-row gap-5">
                <Button text={type === "update" ? "Update Task" : "Add Task"} />
                <Button
                  text={"Cancel"}
                  bg="bg-gray-400 hover:bg-gray-400/75"
                  onClick={() => setmodel(false)}
                  onKeyDown={() => setmodel(false)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default Model;
