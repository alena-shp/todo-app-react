import React from "react"
import CounterTodo from "./CounterTodo"
import FilterTodo from "./FilterTodo"
import SearchTodo from "./SearchTodo"
import TodoList from "./TodoList"
import "./style.scss"

class App extends React.Component {
  idStart = 100

  state = {
    todoData: [
      this.CreateItem("buy coffee"),
      this.CreateItem("order a book"),
      this.CreateItem("to water flowers")
    ]
  }

  CreateItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.idStart++
    }
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProps(todoData, id, "important")
      }
    })
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProps(todoData, id, "done")
      }
    })
  }

  onToggleProps = (arr, id, propsNeme) => {
    const idE = arr.findIndex(e => e.id === id)
    const oldItem = arr[idE]
    const newItem = { ...oldItem, [propsNeme]: !oldItem[propsNeme] }
    return [...arr.slice(0, idE), newItem, ...arr.slice(idE + 1)]
  }

  render() {
    const { todoData } = this.state
    return (
      <div className="app">
        <h1 className="app__header">Todo List</h1>
        <CounterTodo />
        <FilterTodo />
        <SearchTodo />
        <TodoList
          todos={todoData}
          onToggleImportant={this.onToggleImportant}
          onToggleDelete={this.onToggleDelete}
          onToggleDone={this.onToggleDone}
        />
      </div>
    )
  }
}

export default App
