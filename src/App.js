
import { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'


const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 10, 5),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2022, 10, 5),
    description: "MacBook",
    amount: 1200.5,
  },
  {
    id: 'c3',
    date: new Date(2021, 10, 5),
    description: "Mouse",
    amount: 100,
  },
]


 const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }
  
  return (
    <>
    <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </>
  )
}


export default App