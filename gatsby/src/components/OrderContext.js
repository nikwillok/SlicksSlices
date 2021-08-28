import React, { useState } from 'react'
 
// Create an order context
const OrderContext = React.createContext()

export function OrderProvider({ children }) {
  // we need to stick stsate in here
  const [ order, setOrder] = useState([])
  return (
    <OrderContext.Provider
      value={[ order, setOrder ]}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext
