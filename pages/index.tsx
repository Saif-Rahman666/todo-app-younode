import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import CreateTodoModal from "../src/components/CreateTodoModal/CreateTodoModal";
import TodoCard from "../src/components/TodoCard/TodoCard";
import TodoList from "../src/components/TodoList/TodoList";
import { Todo } from "../src/types";

export default function Home({ todos }: { todos: Todo[] }) {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Younode" />
        <link rel="icon" href="/to-do-list.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TodoList />
    </div>
  );
}
