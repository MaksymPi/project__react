import React, { useState } from 'react'

import './CostForm.css'

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputSum, setInputSum] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState ({
    //     name:'',
    //     amount:'',
    //     date:'',
    // });

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })
        // setUserInput((previousState)=>{
        //     return {
        //         ...previousState,
        //         name:event.target.value
        //     }
        // })
    }
    const sumChangeHandler = (event) => {
        setInputSum(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputSum,
            date: new Date(inputDate)
        }

        props.onSaveCostData(costData);
        setInputName('');
        setInputSum('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label htmlFor="">Name</label>
                    <input type="text" value = {inputName} onChange={nameChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label htmlFor="">Sum</label>
                    <input type="number" value = {inputSum} min='0.01' step='0.01' onChange={sumChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label htmlFor="">Data</label>
                    <input type="date" value = {inputDate} min='1993-10-05' step='2223-09-07' onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type='submit'>Add expense</button>
                    <button type='button'onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm