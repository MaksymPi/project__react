
import Costs from './components/Costs/Costs'


import React from 'react'

 const App = () => {

  const costs = [
    {
      date: new Date(1993, 10, 5),
      description: "Fridge",
      amount: 999.99,
    },
    {
      date: new Date(1993, 10, 5),
      description: "MacBook",
      amount: 1200.5,
    },
    {
      date: new Date(1993, 10, 5),
      description: "Mouse",
      amount: 100,
    },
  ]

  return (
    <>
      <Costs costs={costs}/>
    </>
  )
}


export default App