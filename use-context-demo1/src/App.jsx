import React, { useState } from 'react'
import './App.css'
import Header from './Compoents/Header'
import Main from './Compoents/Main'
import Cart from './Compoents/Cart'

// create context 
export const userContext = React.createContext();

function App() {
  const [user, setUser] = useState({name: "Mou Majhi", isLoggedIn: true});
 
  return (
    //provide context at top-level
    <userContext.Provider value={{user, setUser}}>
      <Header />
      <Main />
      <Cart />
    </userContext.Provider>
  )
} 

export default App
