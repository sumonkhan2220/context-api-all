import React, { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const { todoItem } = useContext(todoItemsContext);
  return todoItem.length === 0 && <p className="welcome">Enjoy Your Day.</p>;
};

export default WelcomeMessage;
