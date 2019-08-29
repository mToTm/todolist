import React, { Component } from 'react'
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
        <ul>
         {this.state.list.map((item,index) => <li key={index} onClick={this.delItem.bind(this,index)}>{item}</li>)}
        </ul>
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