// import React,{useState} from 'react'

// const App = () => {
//   const [input,setInput]=useState("");
//   return (
//     <div>
//       <h1>Input</h1>
//       <input type="text" value={input} onChange={(e)=>{
//         setInput(e.target.value)
//       }}/>
//       <button onClick={()=>{
//         console.log(input);
//       }}>Show Value</button>
//       <h1>My Name is : {input}</h1>
//     </div>
//   )
// }

// export default App

import React,{useRef,useState} from 'react'

const App = () => {
  const inputref= useRef();//useRef is used to get the value of input without using state
  const [input,setInput]=useState("");

  const display=()=>{
    // console.log(inputref.current.value);//current is used to get the value of input
    setInput(inputref.current.value);
  } 


  return (
    <div>
      <h1>Input</h1>
      <input type="text" ref={inputref}/>
      <button onClick={display}>Click Me</button>
      <h1>My Name is : {input}</h1>
    </div>
  )
}

export default App