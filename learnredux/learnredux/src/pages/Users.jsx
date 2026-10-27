import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

const Users = () => {
  const users = useSelector((state) => state.userInfo.user)
  console.log(users);
  return (
    <div>
      <Navbar />
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>No users have been added yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={`${user.email}-${index}`}>
              <h2>{user.name}</h2>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <p>Contact: {user.contact}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Users