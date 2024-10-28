import React from 'react'

export default function Users(props) {
    const data = {name:'rahul',email:'rahul@gmail.com'}
  return (
    
    <div>{props.name}
    <button onClick={()=>props.alert(data)}>click</button>
    </div>
  )
}
