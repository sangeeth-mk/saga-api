import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/ducks/count';

const Count = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>Inc</button>
      <button onClick={()=>dispatch(decrement())}>Dec</button>
    </div>

  )
}

export default Count;


