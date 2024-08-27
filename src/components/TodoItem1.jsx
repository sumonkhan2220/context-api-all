import React from "react";

const TodoItem1 = ({ item }) => {
  const { name, dueDate } = item;
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
