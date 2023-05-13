import React, { useState, useEffect } from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const [newtitle, setNewtitle] = useState("")

    useEffect(() => {
        fetch('https://api.sampleapis.com/codingresources/codingResources')
            .then(
                response => {
                    return response.json();
                }
            ).then(
                data => {
                    // /console.log(data);
                    setTitle(data[0].description)
                }
            );
    }, [newtitle]);



    const changeText = () => {
        setTitle(newtitle)
    }
    const changeHandler = (event) => {
        setNewtitle(event.target.value)
    }
    const saveData = (insertData) => {
        fetch('http://localhost/api/expenses_create.php', {
            method: 'POST',
            body: JSON.stringify(insertData),
            headers: {
                'content-Type': 'application/json'
            }
        })
    }
    return (
        <>
            <div className='expense-item'>
                <ExpenseDate date={props.date} />

                <div className='expense-iten__description'>
                    <h2>{title} {props.id}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                    <input type="text" value={newtitle} onChange={changeHandler} />
                    <button className="btn btn-success" onClick={changeText}>Change Title</button>
                </div>
            </div>
        </>
    );
}

export default ExpenseItem;