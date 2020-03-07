import React from "react"
import axios from "axios"
// 引入组件
import TodoItem from "./TodoItem"

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      list: []
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  // 生命周期函数
  componentDidMount() {
    axios.get("/api/todolist.json").then((res) => {
      this.setState({
        list: res.data
      })
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }




  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClick = () => {
    if (!this.state.value) return;
    // this.setState({
    //   list: [...this.state.list, this.state.value],
    //   value: ""
    // })
    this.setState((prevState) => ({ //  prevState: state修改前的state
      list: [...prevState.list, prevState.value],
      value: ""
    }))
  }

  handleDelete = (i) => {
    let list = [...this.state.list]
    list.splice(i, 1)
    this.setState({ list })
  }

  render() {
    return (
      <div>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>text: {this.state.value}</p>
        <hr />
        <button onClick={this.handleClick}>提交</button>

        <ul>
          {/*
              this.state.list.map((item, index) => <li key={index}>{item} <button onClick={this.handleDelete.bind(this, index)}>删除</button></li>)
          */}

          {
            this.state.list.map((item, index) =>
              <TodoItem item={item} key={index} index={index} onDelete={this.handleDelete}></TodoItem>
            )
          }

        </ul>

      </div>
    )
  }

}

export default TodoList;