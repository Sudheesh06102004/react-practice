import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Home = () => {
  const [formInput,setformInput]=useState({
    name:"",
    age:"",
    email:"",
    contact:"",
  })

  const handleChange=(event)=>{
    const {name,value}=event.target;

    setformInput((curr)=>{
      return {
        ...curr,
        [name]:value
      } 
    })
  }


  return (
    <div>
      <Navbar/>
      <form>
        <label>Name</label>
        <br></br>
        <input name='name' type='text' value={formInput.name} onChange={handleChange}/>
        <br></br>

        <label>Age</label>
        <br></br>
        <input name='age' type='number'value={formInput.age} onChange={handleChange}/>
        <br></br>

        <label>Email</label>
        <br></br>
        <input name='email' type='text' value={formInput.email} onChange={handleChange}/>
        <br></br>

        <label>Contact</label>
        <br></br>
        <input name='contact' type='number'value={formInput.contact} onChange={handleChange}/>
        <br></br>

        <button>Add</button>
      </form>
    </div>
  )
}

export default Home