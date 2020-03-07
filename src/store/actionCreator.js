import {
  INPUT_VALUE,
  DELETE_ITEM,
  ADD_ITEM,
  GET_LIST
} from "./actionTypes"


export const getAddAction = (value) => ({
  type: ADD_ITEM,
  value
})
export const getDeleteAction = (index) => ({
  type: DELETE_ITEM,
  index
})
export const getValueAction = (value) => ({
  type: INPUT_VALUE,
  value
})
export const getListAction = (list) => ({
  type: GET_LIST,
  list
})