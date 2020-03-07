import React from 'react';
import { Input, Button, List } from "antd"

import "antd/dist/antd.css";
import "../style.css"

const TodoListUI = (props) => {
  return (
    <div className="list-wrap">
      <Input style={{ width: "350px", marginRight: "10px" }} value={props.value} onChange={(ev) => { props.handleInput(ev) }}></Input>
      <Button
        type="primary"
        onClick={props.handleSubmit}
      >提交</Button>
      <List
        header={<h3>This is a title</h3>}
        footer={<h3>This is a footer</h3>}
        bordered
        style={{ width: "350px" }}
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={props.handleDelete.bind(this, index)} key={index}>
            <div style={{ padding: "10px" }}>{item}</div>
          </List.Item>
        )}
      ></List>
    </div >
  );
}

export default TodoListUI;
