import React from 'react'
import { useRef } from 'react'
const Call2 = ({todo, data})=>{
    console.log('todo func')
    // const renderCount = useRef(0)
    return(
        <>
        {
            data.map((curVal, index)=>{
                return <h1 key={index}>{curVal+index}</h1>
            })
        }
        <button onClick={todo}>Add Todo</button>
        </>
    )
}

export default React.memo(Call2)