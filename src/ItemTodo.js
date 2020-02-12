import React from "react"
import './style.scss'

class ItemTodo extends React.Component {
  render() {
    const {todos} = this.props
    return <div className="item-todo">
  <span className="item-todo__text">{todos.label}</span>
    </div>
  }
}

export default ItemTodo