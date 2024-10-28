import React from 'react'

// const Child = (props) => {
//   return (
//     <div>
//         {console.log("Render from Child")}
//       <h1>React child component</h1>
//       {/* <button onClick={props.handleCount}>Click</button> */}
//     </div>
//   )
// }

// export default Child

import { useRef, memo } from 'react'
const Child = memo((props) => {
  const renderCount = useRef(0)
  console.log(renderCount)
  return (
    <div>
        {console.log("Render from Child")}
      <h1>React child component</h1>
      <span className='text-red-600'>{renderCount.current++}time(s) and name is: {props.biodata.name}</span>
      {/* <button onClick={props.handleCount}>Click</button> */}
    </div>
  )
})

export default Child