import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]); // save the list of items which was entered by the user.
  const completedTodos = todos.filter((todo) => todo.done).length; // it gives back new array.
  const totalTodos = todos.length; // count total todos for footer.
  return (
    <div>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
