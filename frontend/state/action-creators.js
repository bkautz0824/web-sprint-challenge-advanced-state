// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE } from "./action-types"
import axios from "axios" 



export function moveClockwise(currentItem) { 
  return {
    type: MOVE_CLOCKWISE,
    payload: currentItem
  }
}

export function moveCounterClockwise(currentItem) { 
  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: currentItem
  }
}

export function selectAnswer(id) {
  return {
    type: SET_SELECTED_ANSWER,
    payload: id
  }
 }
  
export function setMessage() {
  return {
    type: SET_INFO_MESSAGE,
  }
 }

export function setQuiz(quizState) {
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: quizState
  }
 }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators 
export function fetchQuiz() {
  return function (dispatch) {
    axios
      .get(`http://localhost:9000/api/quiz/next`)
      .then(res => {
        console.log(res)
        dispatch({type:SET_QUIZ_INTO_STATE, payload: res})
      })
      .catch(err => {
        console.log(err)
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    const selectedAnswer = {
      question_id: "",
      answer_id: ""
    }
    axios
    .post(`http://localhost:9000/api/quiz/answer`, selectedAnswer)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      debugger
      console.log(err)
    })

  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
