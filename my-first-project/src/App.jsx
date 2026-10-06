// import Users from "./Users";

// function Hello(){
//   const userdata={
//       name : "Sudheesh",    
//       age:22,
//       phone:1234567890,
//       email:"ss@example.com"
//     };

    
//   return(
//     <>
//       <h1>Hello World</h1>
//       <Users /*name={userdata.name} age={userdata.age} phone={userdata.phone} email={userdata.email}*/
//       {...userdata}
//       />
//     </>
//   )
// }

// export default Hello;


import React,{useState} from 'react'

const App = () => {

  // let x=1;

  let [x,setX]=useState(0);

  const click=  ()=>{
  //  x=2; 
  //  console.log(x);
  setX((val)=>{
    return val+10;
  });
  }


  return (
    <div>
      <h1>{x}</h1>
      <button onClick={click}>Click Me</button>
    </div>
  )
}

export default App