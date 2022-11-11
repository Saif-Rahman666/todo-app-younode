import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TodoCard from '../src/components/TodoCard/TodoCard'
import TodoList from '../src/components/TodoList/TodoList'
import { Todo } from '../types'

export default function Home({todos}:{todos:Todo[]}) {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
      </Head>
      <TodoList todos={todos}/>
    </div>
  )
}

export const getStaticProps:GetStaticProps=async(context)=>{
  const res = await fetch('http://ec2-13-115-61-236.ap-northeast-1.compute.amazonaws.com:3000/tasks?page=1&limit=10')
  const {items}:{items:Todo[]} = await res.json()
  return{
    props:{
      todos:items
    }
  }
}