import React from "react"

class AddItem extends React.Component {
  state = {
    label: ""
  }
  onAddItem = e => {
    const label = e.target.value
    this.setState({ label })
  }

  onSubmitItem = e => {
    e.preventDefault()
    this.props.onAddItem(this.state.label)
    this.setState({ label: "" })
  }
  render() {
    const { label } = this.state
    return (
      <form className="add-item" onSubmit={this.onSubmitItem}>
        <input
          type="text"
          className="add-item__input"
          value={label}
          onChange={this.onAddItem}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default AddItem
