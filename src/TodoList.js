import React from "react"
import ItemTodo from "./ItemTodo"
import './style.scss'

const TodoList = ({ todos }) => {
 
  const todoItems = todos.map(item => {
    const {id, ...restItem} = item
   return (
      <li key={id}
      className="list-todo__item">
        <ItemTodo todos={restItem} />
      </li>
    )
  })
return <ul className="list-todo">{todoItems}</ul>
}

export default TodoList
