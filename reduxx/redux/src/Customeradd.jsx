import React from 'react'
import { useState } from 'react'
import CustomerView from './CustomerView'

const Customeradd = () => {
  const [input,setInput]= useState("");
  const [customers,setCustomers]=useState([]);

  function addCustomers(){
    if(input){
      setCustomers((prev)=>[...prev,input])
      setInput("")
    }
  }
  return (
    <>
    <div>
        <h1>Add New Customer</h1>
        <input type='text' value={input} onChange={(e)=>
          setInput(e.target.value)
        } />
        <button onClick={addCustomers}>Add</button>
    </div>
    <CustomerView customers={customers}/>
    </>
    
  )
}

export default Customeradd