import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, setQuiz, postAnswer } from '../state/action-creators'

 function Quiz(props) {
console.log(props.quizState)
  

  useEffect(() => { 
    props.fetchQuiz()
    !props.quizState.loaded
  }, [])


  const handleAnswerSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quizState.loaded === true ? (
          <>
            <h2>{props.quizState.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.quizState.answer1.text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
              {props.quizState.answer2.text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleAnswerSubmit}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


function mapStateToProps(state) {
  return {
    quizState: state.quiz,
  }
}

export default connect(mapStateToProps, { fetchQuiz, setQuiz, postAnswer })(Quiz)