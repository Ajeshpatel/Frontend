import React from 'react'
import { useDispatch } from 'react-redux' //use useDispatch to dispatch the action
import { addMoney, removeMoney } from './store';

const Buttonupdate = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(addMoney(500))}>add 500</button>
        <button onClick={() => dispatch(removeMoney(500))}>remove 500</button>
    </div>
  )
}

export default Buttonupdate