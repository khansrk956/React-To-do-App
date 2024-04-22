import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done)); // It will create copy of orignal array

  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
