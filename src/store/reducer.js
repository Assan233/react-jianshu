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
    case "value":
      return Object.assign({}, state, { value: action.value });
    case "listItem":
      stateCopy = deepCopy(state)
      stateCopy.value = ""
      stateCopy.list.push(action.value)
      return stateCopy
    case "deleteItem":
      stateCopy = deepCopy(state)
      stateCopy.list.splice(action.value, 1)
      return stateCopy
    default:
      return state;
  }
}