// ❗ You don't need to add extra reducers to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from "./action-types"
import { combineReducers } from 'redux'

const initialWheelState = {
  currentItem: 0,
  wheel: ["B", "", "", "", "", ""],
}

function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:  {
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
    switch(action.type) {
      case SET_QUIZ_INTO_STATE: {
        
        if(action.payload){
        console.log(action.payload)
        
        return action.payload
       }
      }
      default: 
      return state
    }
}

const initialSelectedAnswerState = {
  id:"",
  isSelected: false
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER: {
      console.log(action.payload)
      if(action.payload !== ""){
      return {...state, id: action.payload, isSelected: true}
      }
      if(action.payload === ""){
        return {id: "", isSelected: false}
      }
    }
  }
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case SET_INFO_MESSAGE: {
      console.log(action.payload)
      return action.payload
    }
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
  case INPUT_CHANGE: {
    console.log(action.payload)
    if(action.payload.id === "newQuestion"){
      return {...state, newQuestion: action.payload.value}
    }
    if(action.payload.id === "newTrueAnswer"){
      return {...state, newTrueAnswer: action.payload.value}
    }
    if(action.payload.id === "newFalseAnswer"){
      return {...state, newFalseAnswer: action.payload.value}
    }
  }
  case RESET_FORM: {
    return {newQuestion: '', newTrueAnswer: '', newFalseAnswer: ''}
  }}
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
