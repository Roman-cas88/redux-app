import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

export const Login = () => {
  // create dispatch hook
    const dispatch = useDispatch();

    // create local state for new user
    let user = {
      name: '',
      surname: '',
      age: '',
      email: '',
  };
    const [newUser, setNewUser] = useState(user);

    // function for control values input fields
    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setNewUser(values => ({...values, [name]: value}))
    };

  return (
    <div>
      <form>
        <h2>Login: </h2>
        <input 
          placeholder='Name'
          name='name' 
          type='text'
          value={newUser.name}
          onChange={handleChange}
        /> <br/> <br/>
        <input 
          placeholder='Surname'
          name='surname' 
          type='text'
          value={newUser.surname}
          onChange={handleChange}
        /> <br/> <br/>
        <input 
          placeholder='Age'
          name='age' 
          type='number'
          value={newUser.age}
          onChange={handleChange}
        /> <br/> <br/>
        <input 
          placeholder='Email'
          name='email' 
          type='email'
          value={newUser.email}
          onChange={handleChange}
        /> <br/> <br/>
      </form>
        
        
        <button onClick={() => {
          dispatch(login(newUser))
          console.log(newUser);
          }}>Login</button>
        <button onClick={() => {
          dispatch(logout())
          }}>Logout</button>
    </div>
  )
}
