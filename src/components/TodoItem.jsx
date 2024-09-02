import React, { useContext } from "react";
import TodoItem1 from "./TodoItem1";
import { todoItemsContext } from "../store/todo-items-store";

const TodoItem = () => {
  const { todoItem } = useContext(todoItemsContext);

  return (
    <div className="container">
      {todoItem.map((item, id) => (
        <TodoItem1 item={item} key={id} />
      ))}
    </div>
  );
};

export default TodoItem;
