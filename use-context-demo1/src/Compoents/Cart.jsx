import React from 'react'
import { useContext } from "react";
import { userContext } from "../App";

const Cart = () => {
    const {user} = React.useContext(userContext);
  return (
    <section className="bg-green-500 text-white p-4">
      <h3 className='underline font-bold'> Cart</h3>
      <p>Items in {user.name} 's Cart</p>
      <ul className='list-disc list-inside'>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Sushi</li>
      </ul>
    </section>
  )
}

export default Cart;