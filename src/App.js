import React from "react"

import AddItem from "./AddItem"
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
    ],
    text: "",
    filter: "all"
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

  onItemDelete = id => {
    this.setState(({ todoData }) => {
      const idE = todoData.findIndex(e => e.id === id)
      return {
        todoData: [...todoData.slice(0, idE), ...todoData.slice(idE + 1)]
      }
    })
  }

  onAddItem = text => {
    this.setState(({ todoData }) => {
      const newItem = this.CreateItem(text)
      return { todoData: [...todoData, newItem] }
    })
  }

  onSearchItem = text => {
    this.setState({ text })
  }

  search(items, text) {
    if (text.length === 0) {
      return items
    }
    return items.filter(e => e.label.indexOf(text) > -1)
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items
      case "active":
        return items.filter(e => !e.done)
      case "done":
        return items.filter(e => e.done)
      default:
        return items
    }
  }

  onFilterChange = filter => {
    this.setState({ filter })
  }

  render() {
    const { todoData, text, filter } = this.state
    const visibleItem = this.filter(this.search(todoData, text), filter)

    const counterDone = todoData.filter(e => e.done).length
    const counterNotDone = todoData.length - counterDone
    return (
      <div className="app">
        <h1 className="app__header">Todo List</h1>
        <CounterTodo done={counterDone} notDone={counterNotDone} />
        <div className="app__search-and-filter">
          <SearchTodo onSearchItem={this.onSearchItem} />
          <FilterTodo filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <AddItem onAddItem={this.onAddItem} />
        <TodoList
          todos={visibleItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          onItemDelete={this.onItemDelete}
        />
      </div>
    )
  }
}

export default App
