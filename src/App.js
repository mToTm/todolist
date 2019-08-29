import React, { Component } from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component {
  state = {
    todo: "",
    list: []
  }
  render() {
    return (
      <div>
        <input type="text" 
        style={{marginRight:20}} 
        value={this.state.todo} 
        onChange={this.handleChange}/>
        <button onClick={this.submit}>提交</button>
        {this.state.list.map((item,index) => <TodoItem
        key={index} 
        content={item} 
        index={index} 
        delItem={this.delItem.bind(this)} />)}
      </div>
    )
  }
  handleChange = e => {
    // console.log(e.target.value)
    this.setState({
      todo:e.target.value
    })
  }
  submit = () => {
    const list = [...this.state.list,this.state.todo]
    this.setState({
      list,
      todo: ''
    }) 
  }
  delItem (index) {
    console.log(index)
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list
    })
  }
}

export default TodoList