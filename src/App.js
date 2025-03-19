import { useState } from "react";
import AddTodo from "./AddTodo.js";
import ShoppingCart from "./ShoppingCart.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([...todos, { id: nextId, title: title, done: false }]);
    nextId++;
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return { ...todo, title: nextTodo.title, done: nextTodo.done };
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <h1>Challenge 1 and 2: Update an Item in the shopping cart </h1>
      <ShoppingCart />
      <h1>Challenge 3: Fix the mutations using non-mutative methods </h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
