import './App.css';
import Create from './Components/Create';
import React, { useState, useMemo, useRef, Children, useCallback, createContext, useReducer } from 'react'
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
// import { DarkLight, ThemeContext } from './ContextApi/DarkLight';
// import Child from './Components/Child';
// import Call2 from './Call2'
// import ChildA from './ChildA';
import ClickCounter from './ClickCounter';
import MouseOverCounter from './MouseOverCounter';

// import {Child} from '/.Components/Child';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// function App() {
//   return (
//     <div className="main">
//       <h2 className="main-header">React Crud Operations</h2>
//       <div>
//         <Create />
//       </div>
//     </div>
//   );
// }

// export default App;


// props based useeffect call

// function App() {
//   const [data, setData] = useState(0)
//   const [count, setCount] = useState(100)
//   return (
//     <div className="main">
//       <h2 className="main-header">React Crud Operations</h2>
//       <div>
//         <Create data={data} count={count}/>
//         <button onClick={()=>setData(data +1)}>click</button>
//         <button onClick={()=>setCount(count +1)}>click</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// import User from './Components/User';
// import Users from './Components/Users';
// function App() {
  

// const students =[
//   {name:'Rahul',email:'rahul@gmail.com', contact:123, address:[
//     {Hono:2-203, city:'Hyd', country:'India'}
//   ]},
//   {name:'Rahul1',email:'rahul1@gmail.com', contact:456,address:[
//     {Hono:2-203, city:'Hyd', country:'India'}
//   ]},
//   {name:'Rahul2',email:'rahul2@gmail.com', contact:789,address:[
//     {Hono:2-203, city:'Hyd', country:'India'}
//   ]},
//   {name:'Rahul3',email:'rahul3@gmail.com', contact:102,address:[
//     {Hono:2-203, city:'Hyd', country:'India'}
//   ]}
// ]
// let data = 'Rahul11'

// function parentalert(data)
// {
//   console.log(data)
//   alert(data.name)
// }
// return (
//   <div className="main">
//     <h2 className="main-header">Reuse component with list</h2>
//     <div>
//       {
//         students.map((i,a)=>
//         // <h1>{i.name}</h1>
//         <User data = {i}/>
        
//         )
//       }
//       {/* <Users name={data} />  //parent to child pass data */}
//       <Users alert={parentalert} /> //child to parent
//     </div>
//   </div>
// );
// }
// export default App;

// #usememo

// function App() {
//   const [data, setData] = useState(0)
//   const [count, setCount] = useState(100)

//   // function multicount(){
//   //   console.warn('multicount')
//   //   return count +1
//   // }

//   const multiCount = useMemo(function multicount(){
//     console.warn('multicount')
//     return count +1
//   },[count])
//   return (
//     <div className="main">
//       <h2 className="main-header">UseMemo</h2>
//       <div>
//         <h1>data: {data}</h1>
//         <h1>count: {count}</h1>
//         {/* <h2>{multicount()}</h2> */}
//         <h2>{multiCount}</h2>   //to avoid rerendering of component when state is not updating
//         <button onClick={()=>setData(data +1)}>click</button>
//         <button onClick={()=>setCount(count +1)}>click</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// controlled component , input fields controlled by state is called controlled component
// function App(){

//   const [val, setVal] = useState("100")
//   return(

//     <div>
//       <h1>Controlled component</h1>
//       <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}></input>
//       <h2>val: {val}</h2>
//     </div>
//   )
// }

// export default App


// uncontrolled component (state wotn handle input field updation)

// function App(){
//   let inputRef = useRef(null)
//   let inputRef2 = useRef(null)
//   function submit(e)
// {
//   e.preventDefault()
//   console.warn('inputref1:', inputRef.current.value) 
//   console.warn('inputref2:', inputRef2.current.value)
//   let input3 = document.getElementById('om').value
//   console.warn('inputref3:', input3)
// }
//   return(
//     <div>
//       <form onSubmit={submit}>
//       <input ref={inputRef} type='text' /> <br /> <br />
//       <input ref={inputRef2} type='text' /> <br /> <br />
//       <input id='om' type='text' /> <br /> <br />
//       <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App




// call parent in Children

// import React from 'react';

// // Child component
// const ChildComponent = ({ message }) => {
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>{message}</p>
//     </div>
//   );
// };

// // Parent component
// const ParentComponent = () => {
//   const message = "Hello from Parent Component!";

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <ChildComponent message={message} />
//     </div>
//   );
// };

// // Main App component
// const App = () => {
//   return (
//     <div>
//       <ParentComponent />
//     </div>
//   );
// };

// export default App;


// Parent component
// const ParentComponent = (props) => {
//   const message = "Hello from Parent Component!";

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       {/* <ChildComponent message={message} /> */}
//         <button onClick={()=>props.test(message)}>click</button>
//     </div>
//   );
// };

// // Main App component
// const App = () =>{
//     function display(data){
//           alert(data)
//       }
//   return (
      
//     <div>
//       <ParentComponent  test={display} />
//     </div>
//   );
// };

// export default App;


// import Registration from './Components/UserAuth/Registration';
// function App() {
//   return (
    
//     <div className="main">
//       <h2 className="main-header">React Crud Operations</h2>
//       <div>
//         <Registration />
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Registration from './Components/UserAuth/Registration';
// import Login from './Components/UserAuth/Login';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//    <>
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <a className="navbar-brand" href="#">MyApp</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Features</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Pricing</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">About</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         </nav>
//         <div>
      
//       </div>

//       <p>
// <Router>
//     <Routes>
      
//       <Route path="/registration" element={<Registration />} />
//            <Route path="/login" element={<Login />} />
//           {/* <Route path="/" element={<Home />} />  */}
      
//       </Routes>
//     </Router>
// </p>
//       <footer className="text-center py-4">
//         <p>&copy; {new Date().getFullYear()} MyApp</p>
//       </footer>
//     </div>

//     </>
//   );
  
// };

// const Home = () => (
//   <div>
//     <h1>Welcome to the Auth App</h1>
//     <a href="/register" className="btn btn-primary">Register</a>
//     <a href="/login" className="btn btn-secondary">Login</a>
//   </div>
// );
// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './Components/UserAuth/Login';
// import Registration from './Components/UserAuth/Registration';
// import Product from './Components/Books/Product';
// import Header from './Components/Header';
// import {Footer} from './Components/Footer';
// import UpdateUser from './Components/UpdateUser';
// import Delete from './Components/Delete';
// const App = () => {
//   return (
//     <Router>
//       <Header title='My To Do List' searchBar={true} />
//       <div className="container mt-5">
//         <Routes>
//           <Route path="/register" element={<Registration />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/update" element={<UpdateUser />} />
//           <Route path="/delete" element={<Delete />} />
//         </Routes>
//       </div>
//       {/* <Footer /> */}
//     </Router>
//   );
// };

// const Home = () => (
//   <div>
//     <h1>Welcome to the Auth App</h1>
//     <a href="/register" className="btn btn-primary">Register</a>
//     <a href="/login" className="btn btn-secondary">Login</a>
//   </div>
// );

// export default App;

// import React, {useState} from 'react'
// import Child from './Components/Child';

// function App() {
//   const [count, setCount] = useState(0)
//   // function handleCount(){
//   //   setCount(count +1)
//   // }
//   // const handleCount =()=>{
//   //   setCount(count +1)
//   // }
//   const handleCount = React.useCallback(()=>{
//     // setCount(count +1)     //for cacheing function
//     setCount((prev)=> prev+1)
//   },[setCount])

//   // const result = ()=>{
//   //   let i = 0;
//   //   console.time('result')
//   //   while(i<1000000000){
//   //     i++;
//   //   }
//   //   console.timeEnd('result')
//   //   return 90;
//   // }

//   const result = React.useMemo(()=>{
//     let i = 0;
//       console.time('result')    //value wii cache
//       while(i<1000000){
//         i++;
//       }
//       console.timeEnd('result')
//       return 90;
//   },[count])
//   return (
//     <div>
//       {/* <h1>{count} and res is {result()}</h1> */}
//       <h1>{count} and res is {result}</h1>
//     <Child handleCount={handleCount} />
//     {/* <button onClick={handleCount}>Click</button> */}
//     </div>
//   )
// }


// export default App

// const App = () =>{
//   return(
//     <>
//     <ThemeContext>
//       <DarkLight />
//     </ThemeContext>
//     </>
//   )
// }

// export default App

// UseMemo
// const App = ()=>{
//   const [count, SetCount] = useState(0)
//   // const Biodata = {
//   //   "name":"rahul",
//   //   "Age":22
//   // }

//   const Biodata =  useMemo(()=>{
//     return {
//       "name":"rahul",   // if value change then only render else object also not render using usememo
//       "Age":22
//     }
      
//     }
//   ,[])
//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <Child biodata={Biodata}/>
//       <button onClick={()=>SetCount((prev) =>prev +1)}>click</button>
//     </div>
//   )
// }
// export default App

//usecallback

// function App(){

//   const [add, setAdd] = useState(0)
//   const [data, setData] = useState([])

//   // const todo = ()=>{
//   //   setData((pre)=>[...pre, "New Todo"])
//   // }

//   const todo = useCallback(()=>{
//     setData((pre)=>[...pre, "New Todo"])
//   },[data])
//   return(
//     <>
//     <Call2 todo = {todo} data= {data} /> <br/><br/>
//     <button onClick={()=>setAdd(add+1)}>Addition</button>
//     <h1>{add}</h1>
//   </>
//   )

// }


// export default App

// Props drilling
// function App(){
// const name = "Rahul"
//   return (
//     <ChildA name={name}></ChildA>
//   )
// }

// export default App

//usecontext context api
// const fName = createContext()
// const lName = createContext()
// function App(){

//     return (
//       <>
//       <fName.Provider value={"rahul "}>
//       <lName.Provider value={" Mandal"}>
//       <ChildA/>
//       </lName.Provider>
      
//       </fName.Provider>
      
//       </>
      
//     )
//   }
  
//   export default App
//   export {fName, lName}


//Hoc avoid repetation

// function App(){
// console.log(MouseOverCounter.add(1,2))
//   return(
//     <>
//     <div>
//     <ClickCounter name={"click counter"} />  <br></br>
//     <MouseOverCounter name={"mouse over counter"} />
//     </div>
    
//     </>
//   )
// }

// export default App


// useReducer 

function App(){
 

  const initialState ={
    count:0,
    inc : 2,
    dec: 2
  }
  const reducer = (state, action)=>{
    console.log(state, action);
    // if(action.type ==='INCREMENT'){
    //   return state+1
    // }
    // if(action.type ==='DECREMENT'){
    //   return state-1
    // }
    // if(action.type ==='RESET'){
    //   return (state=0)
    // }
    switch(action.type){
      case "INCREMENT":
        return {...state, count: state.count+1}
    

    case "DECREMENT":
        return {...state, count: state.count-1}
    

    case "RESET":
        return {...state, count:0}

    default:
      return state
    }
  }
  // const [count , setCount] = useState(0)
  // const [count, dispatch] = useReducer(reducer, 0)
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(useReducer(reducer,0))
  return(
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}
export default App