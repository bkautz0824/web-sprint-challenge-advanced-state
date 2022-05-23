// ❗ You don't need to add extra reducers to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE } from "./action-types"
import { combineReducers } from 'redux'

const initialWheelState = {

  currentItem: 0,
  wheel: ["B", "", "", "", "", ""],
}

function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE: {

      }
    case MOVE_COUNTERCLOCKWISE:{
      
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
