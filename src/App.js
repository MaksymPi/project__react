import CostItem from "./components/CostItem";


import React from 'react'

export default function App ()  {

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
      <CostItem
        date = {costs[0].date}
        description = {costs[0].description}
        amount = {costs[0].amount}
      />
      <CostItem
        date = {costs[1].date}
        description = {costs[1].description}
        amount = {costs[1].amount}
      />
      <CostItem
        date = {costs[2].date}
        description = {costs[2].description}
        amount = {costs[2].amount}
      />
    </>
  )
}
