import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import { todoItemsContext } from "./store/todo-items-store";
const App = () => {
  const [todoItem, setTodoItem] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItem((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItem.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItem);
  };

  return (
    <todoItemsContext.Provider
      value={{
        todoItem,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItem />
      </center>
    </todoItemsContext.Provider>
  );
};

export default App;
