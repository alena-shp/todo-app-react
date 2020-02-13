import React from "react"
import ItemTodo from "./ItemTodo"
import "./style.scss"

const TodoList = ({ todos, onToggleImportant, onToggleDone, onItemDelete }) => {
  const element = todos.map(item => {
    const { id, ...restItem } = item
    return (
      <li key={id} className="list-todo__item">
        <ItemTodo
          {...restItem}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onItemDelete={() => onItemDelete(id)}
        />
      </li>
    )
  })
  return <ul className="list-todo">{element}</ul>
}

export default TodoList
