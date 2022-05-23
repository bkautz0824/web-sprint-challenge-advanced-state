// ❗ You don't need to add extra reducers to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE } from "./action-types"
import { combineReducers } from 'redux'

const initialWheelState = {
  currentItem: 0,
  wheel: ["B", "", "", "", "", ""],
}

function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:  {
      console.log(action.payload)
      const item = action.payload
      // const newState = {currentItem: 0, wheel:[]};
      if(item === 0){
        return { currentItem: 1, wheel: ["", "B", "", "", "", ""]} }
      if (item === 1){
        return {currentItem: 2, wheel: ["", "", "B", "", "", ""] }}
      if(item === 2){
        return {currentItem: 3, wheel: ["", "", "", "B", "", ""] }}
      if(item === 3){
        return {currentItem: 4, wheel: ["", "", "", "", "B", ""] }}
      if(item === 4){
        return {currentItem: 5, wheel: ["", "", "", "", "", "B"] }}
      if(item === 5){
        return {currentItem: 0, wheel: ["B", "", "", "", "", ""] }}
      }
    case MOVE_COUNTERCLOCKWISE:{
      const item = action.payload;
      if(item === 0){
        return {currentItem: 5, wheel: ["", "", "", "", "", "B"]}}
      if(item === 5){
        return {currentItem: 4, wheel: ["", "", "", "", "B", ""] }}
      if(item === 4){
        return {currentItem: 3, wheel: ["", "", "", "B", "", ""] }}
      if(item === 3){
        return {currentItem: 2, wheel: ["", "", "B", "", "", ""] }}
      if(item === 2){
        return {currentItem: 1, wheel: ["", "B", "", "", "", ""] }}
      if(item === 1){
        return {currentItem: 0, wheel: ["B", "", "", "", "", ""] }}
    }
  }
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
