import Link from "next/link";
import React, { useState } from "react";
// Types
import { Todo } from "../../types";
import Check from "../../svg/Check";
import Edit from "../../svg/Edit";
import Trash from "../../svg/Trash";
// Styles
import styles from "./todo-card.module.scss";
// Store
import useStore from "../../store";
import CreateTodoModal from "../CreateTodoModal/CreateTodoModal";

const TodoCard = ({
  todo,
  onEdit,
  onRemove,
  onComplete,
}: {
  todo: Todo;
  onEdit: () => void;
  onRemove: () => void;
  onComplete: () => void;
}) => {
  const { cardContainer, leftDetail, lineThrough, detailContainer, icons } = styles;
  const todoCreatedAt = new Date(todo.createdAt).toDateString();
  const todoDeadline = new Date(todo.deadline).toDateString();

  const [completed, setCompleted] = useState<boolean>(false);

  // Store Hook
  const todoStore = useStore();

  return (
    <div className={cardContainer}>
      <div className={leftDetail}>
        <div
          onClick={() => {
            // setCompleted(!completed);
            onComplete();
          }}
        >
          <Check />
        </div>
        <div className={detailContainer}>
          <Link key={todo.id} href={`/task/${todo.id}`}>
            <p className={`${todo.completed ? lineThrough : ""}`}>{todo.title}</p>
          </Link>
          <p>{todoDeadline}</p>
        </div>
      </div>
      <div className={icons}>
        <div onClick={onEdit}>
          <Edit />
        </div>
        <div onClick={onRemove}>
          <Trash />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
