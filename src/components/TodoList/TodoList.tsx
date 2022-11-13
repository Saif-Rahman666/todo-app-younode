import React, { useEffect } from "react";
import { Todo } from "../../types";
import Add from "../../svg/Add";
import TodoCard from "../TodoCard/TodoCard";

import styles from "./todo-list.module.scss";

import useStore from "../../store";
import Link from "next/link";
import CreateTodoModal from "../CreateTodoModal/CreateTodoModal";
import { useRouter } from "next/router";

const TodoList = () => {
  const { todoSection, todoContainer, addButton } = styles;
  const router = useRouter();

  const todoStore = useStore();
  useEffect(() => {
    todoStore.fetchTasks();
  }, []);

  const showEditModal = (id: number) => {
    todoStore.setEditTodoId(id);
    todoStore.showModal();
  };
  const removeTodo = async (id: number) => {
    await todoStore.removeTask(id);
    router.reload();
  };

  const taskCompleted = async (id: number) => {
    const { title, description, deadline } = todoStore.todos.filter(({ id: todoID }) => todoID === id)[0];
    await todoStore.updateTask(id, title, description, deadline, true);
    router.reload();
  };

  return (
    <div className={todoSection}>
      <div className={todoContainer}>
        <h2>Todo</h2>
        {todoStore.todos?.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onEdit={() => showEditModal(todo.id)}
            onRemove={() => removeTodo(todo.id)}
            onComplete={() => taskCompleted(todo.id)}
          />
        ))}
        <div className={addButton} onClick={() => todoStore.showModal()}>
          <Add />
        </div>
      </div>
      {todoStore.modalVisibile ? <CreateTodoModal /> : null}
    </div>
  );
};

export default TodoList;
