import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const loacalTodoList = window.localStorage.getItem("todolist");
  if (loacalTodoList) return JSON.parse(loacalTodoList);

  window.localStorage.setItem("todolist", JSON.stringify([]));
  return [];
};

const initialValue = {
  filterStatus: "all",
  todolist: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
      const todolist = window.localStorage.getItem("todolist");
      if (todolist) {
        const todolistarr = JSON.parse(todolist);
        todolistarr.push({
          ...action.payload,
        });
        window.localStorage.setItem("todolist", JSON.stringify(todolistarr));
      }
    },
    deletetodo: (state, action) => {
      const todolist = window.localStorage.getItem("todolist");
      if (todolist) {
        const todolistarr = JSON.parse(todolist);
        todolistarr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todolistarr.splice(index, 1);
          }
        });
        window.localStorage.setItem("todolist", JSON.stringify(todolistarr));
        state.todolist = todolistarr;
      }
    },
    Updatetodo: (state, action) => {
      const todolist = window.localStorage.getItem("todolist");
      if (todolist) {
        const todolistarr = JSON.parse(todolist);
        todolistarr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });
        window.localStorage.setItem("todolist", JSON.stringify(todolistarr));
        state.todolist = todolistarr;
      }
    },
    UpdateFilter: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, deletetodo, Updatetodo, UpdateFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
