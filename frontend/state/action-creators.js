// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from "./action-types"
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

export function selectAnswer(answerId) {
  
  return {
    type: SET_SELECTED_ANSWER,
    payload: answerId
  }
 }
  
export function setMessage() {
  return {
    type: SET_INFO_MESSAGE,
  }
 }

export function setQuiz() {
  
  return {
    type: SET_QUIZ_INTO_STATE,
  }
 }

export function inputChange(quiz) {
  return {
    type: INPUT_CHANGE,
    payload: quiz
  }
 }

export function resetForm() {
  return {
    type: RESET_FORM
  }
 }


// ❗ Async action creators 
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz())
    axios
      .get(`http://localhost:9000/api/quiz/next`)
      .then(res => {
        dispatch({type:SET_QUIZ_INTO_STATE, payload: res.data})
      })
      .catch(err => {
        console.log(err)
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(answer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    dispatch(setQuiz())
    axios
    .post(`http://localhost:9000/api/quiz/answer`, answer)
    .then(res => {
      dispatch({type:SET_SELECTED_ANSWER, payload: ""})
      dispatch({type:SET_INFO_MESSAGE, payload: res.data.message})
      dispatch(fetchQuiz())
      
    })
    .catch(err => {
      console.log(err)
    })

  }
}
export function postQuiz(quiz) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post(`http://localhost:9000/api/quiz/new`, quiz)
    .then(res => {
      dispatch({type:SET_INFO_MESSAGE, payload: `Congrats: "${res.data.question}" is a great question!`})
      dispatch(resetForm())
    })
    .catch(err => {
      console.log(err)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
