import React, { useState } from 'react'
import withCounrter from './withCounter'
const ClickCounter = (props) => {
    // const [count, setCount] = useState(0);
    // const Increment = ()=>{
    //     setCount((count)=> count+1)
        
    // }
  return (
    <div>
        {/* {count} */}
      {/* <button onClick={Increment}>ClickCounter</button> */}
      <button onClick={props.increment}>{props.name}</button>   //With Hoc
    </div>
  )
}

export default withCounrter(ClickCounter)
