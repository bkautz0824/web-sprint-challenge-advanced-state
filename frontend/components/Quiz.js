import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, setQuiz, postAnswer, selectAnswer } from '../state/action-creators'

 function Quiz(props) {
  
  
  useEffect(() => {
    if(!props.quizState){
    props.fetchQuiz()
    }
  }, [])


  const handleAnswerSubmit = (e) => {
    e.preventDefault()
    props.postAnswer({quiz_id: props.quizState.quiz_id, answer_id: props.answerState.id})
    
  }

  const handleSelectedAnswer = e => {
    const selectedValue = e.target.value
    props.selectAnswer(selectedValue)
    
  }

 
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quizState ? (
          <>
            <h2>{props.quizState.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${props.answerState.isSelected === true && props.answerState.id === props.quizState.answers[0].answer_id ? ' selected' : ''}`}>
                {props.quizState.answers[0].text}
                <button onClick={handleSelectedAnswer} value={props.quizState.answers[0].answer_id}>
                  {props.answerState.isSelected === true && props.answerState.id === props.quizState.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer${props.answerState.isSelected === true && props.answerState.id === props.quizState.answers[1].answer_id ? ' selected' : ''}`}>
              {props.quizState.answers[1].text}
                <button onClick={handleSelectedAnswer} value={props.quizState.answers[1].answer_id}>
                {props.answerState.isSelected === true && props.answerState.id === props.quizState.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleAnswerSubmit} value={props.answerState} disabled={props.answerState.isSelected === true ? false : true}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


function mapStateToProps(state) {
  console.log(state)
  return {
    quizState: state.quiz,
    answerState: state.selectedAnswer
  }
}

export default connect(mapStateToProps, { fetchQuiz, setQuiz, postAnswer, selectAnswer })(Quiz)