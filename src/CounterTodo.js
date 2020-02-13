import React from "react"

const CounterTodo = ({ done, notDone }) => {
  return (
    <div className="counter-todo">
      <h3 className="counter-todo__text">
        <span className="counter-todo__num">{done}</span> things already done
      </h3>
      <h3 className="counter-todo__text">
        <span className="counter-todo__num">{notDone}</span> things to do
      </h3>
    </div>
  )
}

export default CounterTodo
