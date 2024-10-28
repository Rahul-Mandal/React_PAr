import React, { useState } from 'react'
import withCounter from './withCounter'
const MouseOverCounter = (props) => {
    // const  [count, SetCount] = useState(0)

    // const Increment = ()=>{
    //     SetCount(count => count+1)
    // }
  return (
    <div>
        {/* {count} */}
      <button onMouseOver={props.increment}>{props.name}</button>
    </div>
  )
}
MouseOverCounter.add = function(a,b){return a+b}        //static method
export default withCounter(MouseOverCounter)
