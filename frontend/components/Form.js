import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { resetForm, inputChange, postQuiz } from '../state/action-creators'

export function Form(props) {


  const onChange = evt => {
     const newInput = {id: evt.target.id, value: evt.target.value.trim()}
     props.inputChange(newInput)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz({question_text: props.form.newQuestion, true_answer_text: props.form.newTrueAnswer, false_answer_text: props.form.newFalseAnswer})
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" type="text" value={props.form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" type="text" value={props.form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" type="text" value={props.form.newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={props.form.newQuestion.length > 1 && props.form.newTrueAnswer.length > 1 && props.form.newFalseAnswer.length > 1 ? false : true}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
