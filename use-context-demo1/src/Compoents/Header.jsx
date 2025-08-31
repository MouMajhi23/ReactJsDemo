import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'

const Header = () => {
    const  { user }  = useContext(userContext);
   console.log("user", user);      // 👉 { name: "Mou Majhi", isLoggedIn: true }
    
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Food Delivery App</h1>
      <p>Welcome, {user.name}</p>
    </header>
  )
}
export default Header;