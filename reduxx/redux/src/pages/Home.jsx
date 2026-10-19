import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
const Home = () => {

  const [formInput, setFormInput] = useState({
    name: '',
    age: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  }

  console.log(formInput);


  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
      <label>Name</label>
      <br/>
      <input name="name" type="text" placeholder='Enter your name' value={formInput.name} onChange={handleChange} />
      <br/>

      <label>Age</label>
      <br/>
      <input name="age" type="number" placeholder='Enter your age' value={formInput.age} onChange={handleChange} />
      <br/>

      <label>Email</label>
      <br/>
      <input name="email" type="email" placeholder='Enter your email' value={formInput.email} onChange={handleChange} />
      <br/>

      <label>Contact</label>
      <br/>
      <input name="contact" type="number" placeholder='contact number' value={formInput.contact} onChange={handleChange} />
      <br/>
      <br/>

      <button>Add</button>
    </div>
  )
}

export default Home