import React from 'react'
// Types
import { Todo } from '../../../types'
import Check from '../../svg/Check'
import Edit from '../../svg/Edit'
import Trash from '../../svg/Trash'
// Styles
import styles from './todo-card.module.scss'

const TodoCard = ({todo}:{todo:Todo}) => {
    const {cardContainer,leftDetail,detailContainer,icons} = styles
    const todoCreatedAt = new Date(todo.createdAt).toDateString()

  return (
    <div className={cardContainer}>
        <div className={leftDetail}>
            <Check/>
            <div className={detailContainer}>
                <p>{todo.title}</p>
                <p>{todoCreatedAt}</p>
            </div>
        </div>
        <div className={icons}>
            <Edit/>
            <Trash/>
        </div>
    </div>
  )
}

export default TodoCard