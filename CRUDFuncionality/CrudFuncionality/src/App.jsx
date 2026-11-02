import React from 'react'
import { useState } from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const [users, setUsers] = useState([]);
  const [userinfo, setUserinfo] = useState({
    id: uuidv4(),
    name: '',
    age: '',
    email: '',
    phone: ''
  });


  const handleChange = (e) => {
    const {name,value}= e.target;
    setUserinfo({...userinfo,[name]:value})
  }


  const addData=()=>{
    setUsers((currUsers)=>[...currUsers,userinfo]);
    setUserinfo({
      id: uuidv4(),
      name: '',
      age: '',
      email: '',
      phone: ''
    });
  }


  return (
    <div className='container'>
      <div className='form'>
        <input type="text" placeholder='Name' name='name' value={userinfo.name} onChange={handleChange} />
        <br/>
        <input type="number" placeholder='Age' name='age' value={userinfo.age} onChange={handleChange}/>
        <br/>
        <input type="email" placeholder='Email' name='email' value={userinfo.email} onChange={handleChange}  />
        <br/>
        <input type="tel" placeholder='Phone' name='phone' value={userinfo.phone} onChange={handleChange} />
        <br/>
        <button onClick={addData}>Add</button>
      </div>

      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>  
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
               return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                    
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App