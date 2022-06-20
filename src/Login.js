import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from './features/user'

export default function Login() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [email, setEmail] = useState('')
  return (
    <div>
      Name: <input type='text' value={name} onChange={e=>setName(e.target.value)} />
      Age : <input type='text' value={age} onChange={e=>setAge(e.target.value)} />
  Email: <input type='text' value={email} onChange={e=>setEmail(e.target.value)} /><br /><br />
        <button onClick={() => dispatch(login({name:name,age:age,email:email}))}>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}
