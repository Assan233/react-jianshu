import React from "react"

// 引入组件
import TodoList from "./components/TodoList"
class App extends React.Component {

  render() {
    return (
      <div>
        <TodoList></TodoList>
      </div>
    )
  }

}
export default App;