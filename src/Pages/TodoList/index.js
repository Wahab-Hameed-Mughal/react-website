import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Toaster } from "react-hot-toast";
import "./style.css";

import Model from "./Component/Model";
import TodoItem from "./Component/TodoItem";
import { UpdateFilter } from "./slices/todoslice";
import Button from "./Component/Button";

import { useGSAP } from "@gsap/react";
import gsap from "https://esm.sh/gsap";
import Header from "../Component/Header";
import Theme from "../Component/Theme";

export default function TodoList() {
  const [model, setmodel] = useState(false);
  const filterstatus = useSelector((state) => state.todo.filterStatus);
  const todolist = useSelector((state) => state.todo.todolist);
  const dispatch = useDispatch();

  const sortedtodolist = [...todolist];
  sortedtodolist.sort((a, b) => new Date(b.time) - new Date(a.time));

  const updatefilter = (e) => {
    dispatch(UpdateFilter(e.target.value));
    console.log(e.target.value);
  };

  const filtertodo = sortedtodolist.filter((item) => {
    if (filterstatus === "all") {
      return true;
    }
    return item.status === filterstatus;
  });

  const container = useRef();

  useGSAP(() => {
    gsap.from(".allset", {
      y: -100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
    });
    gsap.to(".allset", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.25,
    });
  });

  return (
    <>
      <div className="theme">
        <div className="bg-gray-100 h-screen w-full dark:bg-gray-800">
          <div
            ref={container}
            className="mx-auto overflow-hidden max-w-screen-md"
          >
            <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
              <Header name={"Todo List"} />
              <Theme />
            </div>
            <div className="flex justify-between m-5">
              <Button
                cn="allset"
                onClick={() => setmodel(true)}
                text={"Add Task"}
              />
              <select
                className="allset bg-gray-200 px-5 rounded-xl"
                value={filterstatus}
                onChange={updatefilter}
              >
                <option value="all">All</option>
                <option value="incomplete">incomplete</option>
                <option value="complete">complete</option>
              </select>
            </div>
            {/*  */}
            {/*  */}

            {/* Display List */}
            <section className="m-5">
              {filtertodo && filtertodo.length > 0 ? (
                filtertodo.map((todo) => (
                  <TodoItem itemshow="itemshow" key={todo.id} todo={todo} />
                ))
              ) : (
                <p>No todo Found</p>
              )}
            </section>

            <Model model={model} setmodel={setmodel} />

            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  fontSize: "1.5em",
                  whiteSpace: "nowrap",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
