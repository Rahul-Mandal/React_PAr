import React, { useEffect, useState } from 'react'
import App from '../App'
import Table from 'react-bootstrap/Table';

// export default function Create() {
//   const [data, setData] = useState(0)
//   const [count, setCount] = useState(100)
//   // console.warn(data)

//   useEffect(()=>{
//     console.warn(data, count)
//     // alert(data)
//     // alert(count)
//   },[data, count])
//     return (
//         <div className="main">
          
//           <h1>data: {data}</h1>
//           <button onClick={()=>setData(data +1)}>click</button>

//           <h1>count: {count}</h1>
//           <button onClick={()=>setCount(count +1)}>click</button>
//         </div>
//       );
// }

// #props based useEffect

// export default function Create(props) {
//   // const [data, setData] = useState(0)
//   // const [count, setCount] = useState(100)
//   // console.warn(data)

//   useEffect(()=>{
//     console.warn(props.data, props.count)
//     // alert(data)
//     // alert(count)
//   },[props.data, props.count])
//     return (
//         <div className="main">
          
//           <h1>data: {props.data}</h1>
         

//           <h1>count: {props.count}</h1>
          
//         </div>
//       );
// }


function Create(){
// const students = ['rahul', 'raj', 'ram']

const students =[
  {name:'Rahul',email:'rahul@gmail.com', contact:123, address:[
    {Hono:2-203, city:'Hyd', country:'India'}
  ]},
  {name:'Rahul1',email:'rahul1@gmail.com', contact:456,address:[
    {Hono:2-203, city:'Hyd', country:'India'}
  ]},
  {name:'Rahul2',email:'rahul2@gmail.com', contact:789,address:[
    {Hono:2-203, city:'Hyd', country:'India'}
  ]},
  {name:'Rahul3',email:'rahul3@gmail.com', contact:102,address:[
    {Hono:2-203, city:'Hyd', country:'India'}
  ]}
]
// students.map((i)=>{
//   console.log('my name is:', i)
// })

// for (let i = 0; i<students.length; i++)
// console.log('for loop', students[i])


return (
  <div>
    <h1>handling array</h1>
    <Table striped bordered hover variant="dark">
    <tbody>
    <tr>
    <td>Sl.No</td>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
        <td>Address</td>
       </tr> 
    {
      students.map((i,ind)=>
       <tr key = {ind}>
        <td>{ind+1}</td>
        <td>{i.name}</td>
        <td>{i.email}</td>
        <td>{i.contact}</td>
        <td>{
        i.address.map((data, a)=>
        <tr key={a}>
          <td>{data.Hono}</td>
        </tr>)}
        </td>
       </tr> 
      )
    }
    </tbody>
    </Table>
    <h1>ss</h1>
  </div>
  
)
} 
export default Create