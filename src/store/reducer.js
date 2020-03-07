const defaultState = {
  value: "",
  list: []
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// reducer 里面只能进行纯函数操作
export default (state = defaultState, action) => {
  let stateCopy;
  switch (action.type) {
    case "input_value":
      return Object.assign({}, state, { value: action.value });
    case "add_item":
      stateCopy = deepCopy(state)
      stateCopy.value = ""
      stateCopy.list.push(action.value)
      return stateCopy
    case "delete_item":
      stateCopy = deepCopy(state)
      stateCopy.list.splice(action.index, 1)
      return stateCopy
    default:
      return state;
  }
}