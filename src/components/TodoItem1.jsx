import React, { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";

const TodoItem1 = ({ item }) => {
  const { name, dueDate } = item;
  const { deleteItem } = useContext(todoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(name)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
