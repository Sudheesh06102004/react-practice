import React from 'react'

const CustomerView = ({customers}) => {
  return (
    <div>
        <h1>Customer View Page</h1>
        <ul style={{ listStyle: 'none' }}>
            {customers.map((customer,index)=>(
                <li key={index}>{customer}</li>
            ))}
            
        </ul>
    </div>
  )
}

export default CustomerView