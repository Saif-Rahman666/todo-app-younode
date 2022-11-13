import create from "zustand";
import { Todo } from "./types";
import { fetchData, postData } from "./utils/utils";

type Store = {
  todos: Todo[];
  taskDetails: Todo;
  modalVisibile: boolean;
  editTodoId: number;
  fetchTasks: () => void;
  addTask: (title: string, description: string, deadline: string) => void;
  updateTask: (id: number, title: string, description: string, deadline: string, completed: boolean) => void;
  removeTask: (id: number) => void;
  getTaskDetails: (id: number) => void;
  showModal: () => void;
  hideModal: () => void;
  setEditTodoId: (id: number) => void;
};

const useStore = create<Store>((set, get) => ({
  todos: [],
  taskDetails: { id: NaN, createdAt: "", updatedAt: "", title: "", description: "", deadline: "", completed: false },
  modalVisibile: false,
  editTodoId: NaN,

  fetchTasks: async () => {
    const { items } = await fetchData({ endpoint: "tasks?page=1&limit=10" });
    set((state) => ({ ...state, todos: items }));
  },

  addTask: async (title: string, description: string, deadline: string) => {
    const body = { title: title, description: description, deadline: deadline };

    await postData({ endpoint: "tasks", method: "POST", body: JSON.stringify(body) });
  },

  updateTask: async (id: number, title: string, description: string, deadline: string, completed: boolean) => {
    // Filter the data from the list of todos
    const body = { title: title, description: description, deadline: deadline, completed: completed };

    await postData({ endpoint: `tasks/${id}`, method: "PUT", body: JSON.stringify(body) });
    set((state) => ({ ...state, editTodoId: NaN }));
  },
  removeTask: async (id: number) => {
    await postData({ endpoint: `tasks/${id}`, method: "DELETE" });
  },
  getTaskDetails: async (id: number) => {
    const taskDetails = await fetchData({ endpoint: `tasks/${id}` });
    set((state) => ({ ...state, taskDetails: taskDetails }));
  },
  showModal: () => {
    console.log(get().editTodoId);
    set((state) => ({ ...state, modalVisibile: true }));
  },
  hideModal: () => {
    set((state) => ({ ...state, modalVisibile: false, editTodoId: NaN }));
  },
  setEditTodoId: (id: number) => {
    set((state) => ({ ...state, editTodoId: id }));
  },
}));

export default useStore;
