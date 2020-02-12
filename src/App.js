import React from "react"
import CounterTodo from "./CounterTodo"
import FilterTodo from "./FilterTodo"
import SearchTodo from "./SearchTodo"
import TodoList from "./TodoList"
import './style.scss'

class App extends React.Component {
  idStart = 1

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

  render() {
    const { todoData } = this.state
    return (
      <div className="app">
        <h1 className="app__header">Todo List</h1>
        <CounterTodo />
        <FilterTodo />
        <SearchTodo />
        <TodoList todos={todoData}/>
      </div>
    )
  }
}

export default App
