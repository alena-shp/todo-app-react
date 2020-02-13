import React from "react"

class SearchTodo extends React.Component {
  state = {
    text: ""
  }
  onSearchItem = e => {
    const text = e.target.value
    this.setState({ text })
    this.props.onSearchItem(text)
  }

  render() {
    const { text } = this.state
    return (
      <div className="search-todo">
        <input
          className="search-todo__input"
          type="text"
          placeholder="search todo..."
          value={text}
          onChange={this.onSearchItem}
        />
      </div>
    )
  }
}

export default SearchTodo
