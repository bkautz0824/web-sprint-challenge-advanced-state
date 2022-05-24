import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import React from 'react'
import { connect } from 'react-redux'

 function Wheel(props) {

const { moveClockwise, moveCounterClockwise, initWheel } = props
 


  const handleClockwise = () => {
    
    moveClockwise(props.initWheel.currentItem)
  }

  const handleCounterClockwise = () => {
    moveCounterClockwise(props.initWheel.currentItem)
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        {initWheel.wheel.map((item, id) => 
          <div 
            key={id} className={`cog ${item ==='B' ? 'active' : ''}`} style={{ "--i": id}}>{item}
          </div>)}
        
       
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    initWheel: state.wheel,
  }
}


export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)