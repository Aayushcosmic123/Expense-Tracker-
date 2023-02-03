
import React, { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020') ;

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);  
  };
  //adding the filter 
   const filteredExpenses = props.items.filter((expense)=> {return expense.date.getFullYear().toString() === filteredYear;}) ;
   //better approach for conditional rendering
  
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
       <ExpensesList items={filteredExpenses}/>
     
      </Card>
    </div>
  );
};

export default Expenses;

/*
Alternate way to render was :
   <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        
       <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date} 
        /> 
  */