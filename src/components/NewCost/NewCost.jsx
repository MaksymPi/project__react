
import React, { useState } from 'react'

import './NewCost.css';
import CostForm from './CostForm'

const NewCost = (props) => {

  const [isFormVisible, setFormVisible ] = useState(false);

  const saveCostDataHandler = (inputCostData) => {

    const costData = {
      ...inputCostData,
      id: Math.random().toString()

    };

    props.onAddCost(costData);
    setFormVisible(false);

  }

  const inputCostDataHandler = () => {
    setFormVisible(true);
  }

  const cancelCostHandler = () => {
    setFormVisible(false);
  }

  return (
    <div className="new-cost">
      {!isFormVisible && <button onClick={inputCostDataHandler}>Add a New Expense</button>}
     {isFormVisible &&<CostForm onSaveCostData={saveCostDataHandler} onCancel = {cancelCostHandler}/>} 
    </div>
  )
}

export default NewCost