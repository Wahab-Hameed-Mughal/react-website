import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { Updatetodo, deletetodo } from "../slices/todoslice";
import Modal from "./Model";
import CheckBox from "./CheckBox";

import { useGSAP } from "@gsap/react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import gsap from "gsap";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setchecked] = useState(false);
  const [model, setmodel] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") setchecked(true);
    else setchecked(false);
  }, [todo.status]);

  //   Delete
  const handleDelete = () => {
    dispatch(deletetodo(todo.id));
    toast.success("Task is Deleted");
  };

  //   Update
  const handleUpdate = () => setmodel(true);

  // Checked
  const handleChange = (e) => {
    setchecked(e.target.checked);
    dispatch(
      Updatetodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  const todoitem = useRef();

  useGSAP(() => {
    gsap.from(".itemshow", {
      x: 250,
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
    });
    gsap.to(".itemshow", {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.25,
    });
  });

  return (
    <>
      <div
        ref={todoitem}
        className="itemshow my-2 flex flex-wrap sm:flex-nowrap gap-5 gap-sm-0 justify-between border-2 p-3 rounded-xl bg-indigo-500/25 border-gray-400"
      >
        <div className="flex gap-5 items-center m-auto sm:m-0 dark:text-white ">
          <CheckBox
            checked={checked}
            setchecked={setchecked}
            handleChange={handleChange}
          />
          <div>
            <p
              className={`font-bold capitalize 
            ${todo.status === "complete" ? "line-through text-gray-500" : ""}`}
            >
              {todo.title}
            </p>
            <p>{todo.time}</p>
          </div>
        </div>
        <div className="flex gap-3 my-auto mx-auto sm:mx-0 h-fit">
          <Button
            text={<FontAwesomeIcon icon={faPenToSquare} />}
            bg="bg-green-500 hover:bg-green-500/75"
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
          />
          <Button
            text={<FontAwesomeIcon icon={faTrashCan} />}
            bg="bg-red-500 hover:bg-red-500/75"
            onClick={handleDelete}
            onKeyDown={handleDelete}
          />
        </div>
      </div>
      <Modal model={model} setmodel={setmodel} type="update" todo={todo} />
    </>
  );
}

export default TodoItem;
