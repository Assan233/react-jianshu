import React from "react"
import PropTypes from "prop-types" // prop 类型检查插件




class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  handleDelete = () => {
    this.props.onDelete(this.props.index)
  }

  render() {

    return (
      <li key={this.props.index}>
        <span>{this.props.item}--{this.props.test}</span>
        <button
          onClick={this.handleDelete}>删除</button>
      </li>
    )
  }

}

// 定义组件props的相关设置

// prop类型限制
TodoItem.propTypes = {
  item: PropTypes.string.isRequired, // isRequired为必传 
  index: PropTypes.number,
  onDelete: PropTypes.func,
  test: PropTypes.string
}

// props默认值设置
TodoItem.defaultProps = {
  item: "无内容",
  index: 0,
  onDelete: () => { },
  test: "Assan"
}


export default TodoItem;