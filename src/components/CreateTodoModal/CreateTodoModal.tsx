import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import useStore from "../../store";
import Add from "../../svg/Add";
import Cross from "../../svg/Cross";
import { Todo } from "../../types";
import styles from "./create-todo-modal.module.scss";
import InputField from "./InputField/InputField";

const CreateTodoModal = () => {
  const { backdrop, modalContainer, formContainer, addbutton, closeModalButton } = styles;
  // Router
  const router = useRouter();
  // Store
  const todoStore = useStore();
  // Controlled Inputs
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");

  useEffect(() => {
    console.log(todoStore.editTodoId);
    if (todoStore.editTodoId) {
      const { title, description, deadline } = todoStore.todos.filter(({ id }) => id === todoStore.editTodoId)[0];
      setTitle(title);
      setDescription(description);
      const deadlineDateFormatted = new Date(deadline).toISOString().split("T")[0];
      console.log(deadlineDateFormatted);
      setDeadline(deadlineDateFormatted);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (todoStore.editTodoId) {
      const { id, completed } = todoStore.todos.filter(({ id }) => id === todoStore.editTodoId)[0];
      await todoStore.updateTask(id, title, description, deadline, completed);
      return;
    }
    await todoStore.addTask(title, description, deadline);
    router.reload();
  };

  return (
    <div className={backdrop}>
      <div className={modalContainer}>
        <div className={closeModalButton} onClick={() => todoStore.hideModal()}>
          <Cross />
        </div>
        <h2>Add Task</h2>
        <form onSubmit={(e) => handleSubmit(e)} className={formContainer}>
          <InputField
            placeholder="Title"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            value={title}
          />
          <InputField
            placeholder="Description"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            value={description}
          />
          <InputField
            placeholder="Deadline"
            type="date"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDeadline(e.target.value)}
            value={deadline}
          />
          <button className={addbutton}>
            <Add />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTodoModal;
