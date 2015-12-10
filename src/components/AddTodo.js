import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'

export default class AddTodo extends Component{
  handleClick(e) {
    const node = findDOMNode(this.refs.input)
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }

  handleKeyDown(e) {
    const node = findDOMNode(this.refs.input)
    const text = node.value.trim()
    if(e.keyCode == 13) {
      this.props.onAddClick(text)
      node.value = ''
    }
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' onKeyDown={e => this.handleKeyDown(e)} />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }
}
