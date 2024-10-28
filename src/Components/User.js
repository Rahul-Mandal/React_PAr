import React from 'react'

export default function User(props) {
  return (

    <div>
        <span>{props.data.name}</span>
        <span>{props.data.email}</span>
        <span>{props.data.contacts}</span></div>
  )
}
