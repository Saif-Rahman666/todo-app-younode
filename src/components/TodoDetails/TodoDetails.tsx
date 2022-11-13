import React from "react";
// Types
import { Todo } from "../../types";
// Styles
import styles from "./todo-details.module.scss";

const TodoDetails = ({ todo }: { todo: Todo }) => {
  const deadline = new Date(todo.deadline).toDateString();

  const { detailsContainer, deadlineText } = styles;

  return (
    <div className={detailsContainer}>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p className={deadlineText}>{deadline}</p>
    </div>
  );
};

export default TodoDetails;
