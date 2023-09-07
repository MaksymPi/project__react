import React, {useState} from 'react'

import './CostForm.css'

const CostForm = () => {

    const [name, setName] = useState('');
    const [sum, setSum] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const sumChangeHandler = (event) => {
        setSum(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

  return (
    <form action="">
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label htmlFor="">Name</label>
                <input type="text" onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label htmlFor="">Sum</label>
                <input type="number" min= '0.01' step='0.01' />
            </div>
            <div className="new-cost__control">
                <label htmlFor="">Date</label>
                <input type="date"  min='1993-10-05' step='2223-09-07'/>
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Add expense</button>
            </div>
        </div>
    </form>
  )
}

export default CostForm