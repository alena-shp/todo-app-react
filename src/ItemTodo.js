import React from "react"
import "./style.scss"

import deleteImg from "./assets/deleteImg.png"
import importantImg from "./assets/importantImg.png"

class ItemTodo extends React.Component {
  render() {
    const { todos } = this.props
    return (
      <div className="item-todo">
        <span className="item-todo__text">{todos.label}</span>
        <div className="item-todo__action">
        <button className="item-todo__action--important">
          <img src={importantImg} alt="" />
        </button>
        <button className="item-todo__action--delete">
          <img src={deleteImg} alt="" />
        </button>
        </div>
      </div>
    )
  }
}

export default ItemTodo
