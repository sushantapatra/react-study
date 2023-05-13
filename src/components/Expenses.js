import React, { useEffect } from 'react'
import './Expenses.css'

import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    let expenseDate = new Date(2022, 8, 12)
    let expenseTitle = "School Fee"
    let expenseAmount = 300
    useEffect(() => {
        fetch('https://api.sampleapis.com/codingresources/codingResources')
            .then(
                response => {
                    return response.json();
                }
            ).then(
                data => {
                    //console.log(data);
                }
            );
    }, []);

    return (
        <div>
            <ExpenseItem id="1" key={expenseDate.id} title={expenseTitle} date={expenseDate} amount={expenseAmount} />
            <ExpenseItem id="2" key={expenseDate.id} title="Bike maintance" date={expenseDate} amount="10" />
            <ExpenseItem id="3" key={expenseDate.id} title="Home Rent" date={expenseDate} amount="60" />


        </div>
    )
}

export default Expenses