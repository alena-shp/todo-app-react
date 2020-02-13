import React from "react"
import "./style.scss"

import deleteImg from "./assets/deleteImg.png"
import importantImg from "./assets/importantImg.png"

const ItemTodo = ({
  label,
  done,
  important,
  onToggleImportant,
  onToggleDone
}) => {
  let classImportant = "item-todo__text"
  if (important) {
    classImportant += " active-text-important"
  }
  if (done) {
    classImportant += " active-text-done"
  }

  return (
    <div className="item-todo">
      <span className={classImportant} onClick={onToggleDone}>
        {label}
      </span>
      <div className="item-todo__action">
        <button onClick={onToggleImportant}>
          <img src={importantImg} alt="" />
        </button>
        <button className="item-todo__action--delete">
          <img src={deleteImg} alt="" />
        </button>
      </div>
    </div>
  )
}

export default ItemTodo
