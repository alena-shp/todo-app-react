import React from "react"
import CounterTodo from "./CounterTodo"
import FilterTodo from "./FilterTodo"
import SearchTodo from "./SearchTodo"
import TodoList from "./TodoList"

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CounterTodo />
        <FilterTodo />
        <SearchTodo />
        <TodoList />
      </div>
    )
  }
}

export default App
