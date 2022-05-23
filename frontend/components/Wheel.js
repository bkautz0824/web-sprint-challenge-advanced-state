import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import React, { useState } from 'react'
import { connect } from 'react-redux'

 function Wheel(props) {
   console.log(props.initWheel)
  const [state, setState] = useState({
    currentItem: props.initWheel.currentItem,
    wheel: props.initWheel.wheel,
  })
  console.log(state.wheel)

  return (
    <div id="wrapper">
      <div id="wheel">
        {state.wheel.map((item, id) => 
          <div 
            key={id} className={`cog ${item ==='B' ? 'active' : ''}`} style={{ "--i": id}}>{item}
          </div>)}
        
       
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

function mapStateToProps(wheelState) {
  return {
    initWheel: wheelState.wheel
  }
}


export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)