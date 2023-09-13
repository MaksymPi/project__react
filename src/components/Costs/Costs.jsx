import React, { useState } from 'react'

import './Costs.css'
import Card from '../UI/Card/Card'
import CostsFilter from '../CostsFilter/CostsFilter'
import CostList from '../CostList/CostList'
import CostsDiagram from '../Diagram/CostsDiagram'

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2023')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear
  })

 

  return (
    <>
      <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs ={filteredCosts}/>
        <CostList costs={filteredCosts}/>
      </Card>
    </>
  )
}
export default Costs