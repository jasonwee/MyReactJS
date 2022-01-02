import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';

const items = [
   { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
   { id: 1, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
   { id: 1, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
   { id: 1, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
   { id: 1, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
   { id: 1, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
   { id: 1, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
   { id: 1, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
   { id: 1, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
   { id: 1, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]

ReactDOM.render(
   <React.StrictMode>
      <ExpenseEntryItemList items={items} />
   </React.StrictMode>,
   document.getElementById('root')
);
