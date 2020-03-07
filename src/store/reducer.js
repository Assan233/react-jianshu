import {
  INPUT_VALUE,
  DELETE_ITEM,
  ADD_ITEM,
  GET_LIST
} from "./actionTypes"

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
    case INPUT_VALUE:
      return Object.assign({}, state, { value: action.value });
    case ADD_ITEM:
      stateCopy = deepCopy(state)
      stateCopy.value = ""
      stateCopy.list.push(action.value)
      return stateCopy
    case DELETE_ITEM:
      stateCopy = deepCopy(state)
      stateCopy.list.splice(action.index, 1)
      return stateCopy
    case GET_LIST:
      stateCopy = deepCopy(state)
      stateCopy.list = action.list
      return stateCopy
    default:
      return state;
  }
}