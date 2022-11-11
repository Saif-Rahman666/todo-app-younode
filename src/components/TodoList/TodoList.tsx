import React from 'react'
import { Todo } from '../../../types'
import Add from '../../svg/Add'
import TodoCard from '../TodoCard/TodoCard'

import styles from './todo-list.module.scss'

const TodoList = ({todos}:{todos: Todo[]}) => {
    const {todoSection,todoContainer,addButton} = styles

  return (
    <div className={todoSection}>
        <div className={todoContainer}>
            <h2>Todo</h2>
            {todos.map((todo)=><TodoCard key={todo.id} todo={todo} />)}
            <div className={addButton}>
                <Add/>
            </div>
        </div>

    </div>
  )
}

export default TodoList