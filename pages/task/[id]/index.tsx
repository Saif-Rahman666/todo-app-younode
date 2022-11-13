import { useRouter } from "next/router";
import React, { useEffect } from "react";
import TodoDetails from "../../../src/components/TodoDetails/TodoDetails";
import useStore from "../../../src/store";

const Task = () => {
  // Query Parameter
  const router = useRouter();
  const { id } = router.query;
  // Store
  const todoStore = useStore();
  // Fetch Details
  useEffect(() => {
    if (id) {
      todoStore.getTaskDetails(Number(id));
    }
  }, [id]);

  return (
    <>
      <TodoDetails todo={todoStore.taskDetails} />
    </>
  );
};

export default Task;
