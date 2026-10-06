import React from 'react'

function Users({name, age, phone, email}) {
  return (
    <>  
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>     
    </>
  )
}

export default Users;