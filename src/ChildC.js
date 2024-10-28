import React, { useContext } from 'react'
import { fName, lName } from './App'
const ChildC = ({name}) => {
    const fname = useContext(fName)
    const lname = useContext(lName)
  return (

    // <>
    // <fName.Consumer>
    //     {
    //         (fname)=>{
    //             return(
    //                 <lName.Consumer>
    //                     {
    //                     (lname)=>{
    //                         return(
    //                             <h1> my name is: {fname}, last name: {lname}</h1>
    //                         )
    //                     }}
    //                 </lName.Consumer>
    //                 // <h1> my name is: {fname}</h1>
    //             )
    //         }
    //     }
      
    // </fName.Consumer>
    // </>


    <>
    <h1>my name {fname} </h1>
    <h2>{lname}</h2>
    </>
  )
}

export default ChildC
