import React from "react"
import classNames from "classnames"
import "./style.scss"

import deleteImg from "./assets/deleteImg.png"
import importantImg from "./assets/importantImg.png"

const ItemTodo = ({
  label,
  done,
  important,
  onToggleImportant,
  onToggleDone,
  onItemDelete
}) => {
  let classImportant = classNames("item-todo__text", {
    "active-text-important": important,
    "active-text-done": done
  })

  let classImportantBtn = classNames("item-todo__action-btn", {
    "active-btn": important
  })

  return (
    <div className="item-todo">
      <span className={classImportant} onClick={onToggleDone}>
        {label}
      </span>
      <div className="item-todo__action">
        <button onClick={onToggleImportant} className={classImportantBtn}>
          <img src={importantImg} alt="" />
        </button>
        <button className="item-todo__action-btn" onClick={onItemDelete}>
          <img src={deleteImg} alt="" />
        </button>
      </div>
    </div>
  )
}

export default ItemTodo
