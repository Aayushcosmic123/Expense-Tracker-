
import React from 'react' ;
import ExpenseItem from './ExpenseItem' ;
import './ExpensesList.css' ;

const ExpensesList = props => {

    //better approach for conditional rendering, we moved it here from the expenses.js file

  //adding conditional return statements 
    if(props.items.length ===0)
    {
        return <h2 className='expenses-list__fallback'> Found no  expenses! </h2> 
    }

    return <ul className='expenses-List'>
         {  props.items.map(expense=> <ExpenseItem key={expense.id} title={expense.title}
       amount={expense.amount}
       date={expense.date} />)  }
    </ul>
};

export default ExpensesList ;