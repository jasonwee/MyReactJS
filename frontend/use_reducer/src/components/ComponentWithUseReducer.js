import { useReducer } from 'react';



const reducer = (state, action) => {
   switch (action.type){
   case "DEPOSIT":
       return state + action.payload
   case "WITHDRAWL":
       return state - action.payload
   default:
       return state
   }
};

export default function ComponentWithUseReducer() {

  const deposit = (amount) => {
    dispatch({
       type: "DEPOSIT",
       payload: amount,
    });
  }

  const withdrawl = (amount) => {
    dispatch({
       type: "WITHDRAWL",
       payload: amount,
    });
  }

  const [ amount, dispatch ] = useReducer(reducer, 500);

  return (
     <div>
         {amount}
         <button onClick={ () => deposit(500) }>deposit</button>
         <button onClick={ () => withdrawl(500) }>withdrawl</button>
     </div>
  )
}
