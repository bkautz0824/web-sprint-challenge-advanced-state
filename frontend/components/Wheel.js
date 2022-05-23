import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import React, { useState } from 'react'
import { connect } from 'react-redux'

 function Wheel(props) {
   console.log(props.initWheel)

  const { moveClockwise, moveCounterClockwise, initWheel } = props
 


  const handleClockwise = () => {
    console.log(props.initWheel)
    moveClockwise(props.initWheel.currentItem)
  }

  const handleCounterClockwise = () => {
    console.log(props.initWheel)
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
  console.log(state)
  return {
    initWheel: state.wheel,
  }
}


export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)