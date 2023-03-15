import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
    const user = useSelector((state) => state.user.value)
  return (
    <div>
        <h1>My profile</h1>
        <h4>Name: <em>{user.name}</em></h4>
        <h4>Surname: <em>{user.surname}</em></h4>
        <h4>Age: <em>{user.age}</em></h4>
        <h4>Email: <em>{user.email}</em></h4>
    </div>
  )
}
