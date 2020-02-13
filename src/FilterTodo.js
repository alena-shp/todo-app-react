import React from "react"
import classNames from "classnames"

class FilterTodo extends React.Component {
  buttons = [
    { name: "all", label: "all" },
    { name: "active", label: "active" },
    { name: "done", label: "done" }
  ]

  render() {
    const { onFilterChange, filter } = this.props
    const buttons = this.buttons.map(btn => {
      const { name, label } = btn

      const filterBtn = classNames("filter-todo__btn", {
        "filter-todo__btn--active": filter === name
      })

      return (
        <button key={name} onClick={() => onFilterChange(name)} className={filterBtn}>
          {label}
        </button>
      )
    })
    return <div className="filter-todo">{buttons}</div>
  }
}

export default FilterTodo
