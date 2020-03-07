import React, { Component } from 'react';
import axios from "axios"
import store from "../store"
import {
  getAddAction,
  getDeleteAction,
  getValueAction,
  getListAction
} from "../store/actionCreator"
import TodoListUI from "./TodoListUI"

export class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {}


    // redux添加订阅, store的tate变化时, 去更新视图
    store.subscribe(this.storeChange)
  }

  componentDidMount() {
    axios.get("api/todolist.json").then((res) => {
      const action = getListAction(res.data)
      store.dispatch(action)
    }).catch((err) => {
      console.log(err);
    })
  }


  storeChange = () => {
    const newState = store.getState()
    this.setState(newState)
  }

  handleInput = (ev) => {
    const action = getValueAction(ev.target.value)
    store.dispatch(action) // 发送数据给reducer
  }

  handleDelete(index) {
    const action = getDeleteAction(index)
    store.dispatch(action)
  }

  handleSubmit = () => {
    const value = this.state.value
    const action = getAddAction(value)
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        value={this.state.value}
        list={this.state.list}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
      ></TodoListUI>
    )
  }
}

export default TodoList;