import React, { Component } from 'react';
import { Input, Button, List } from "antd"
import store from "../store"
import { getAddAction, getDeleteAction, getValueAction } from "../store/actionCreator"

import "antd/dist/antd.css";
import "../style.css"

export class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    // redux添加订阅, store的tate变化时, 去更新视图
    store.subscribe(this.storeChange)
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
      <div className="list-wrap">
        <Input style={{ width: "350px", marginRight: "10px" }} value={this.state.value} onChange={(ev) => { this.handleInput(ev) }}></Input>
        <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        <List
          header={<h3>This is a title</h3>}
          footer={<h3>This is a footer</h3>}
          bordered
          style={{ width: "350px" }}
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDelete.bind(this, index)} key={index}>
              <div style={{ padding: "10px" }}>{item}</div>
            </List.Item>
          )}
        ></List>
      </div >
    );
  }
}

export default TodoList;
