import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './components/counter';
import { useEffect } from 'react';
import { getuser } from './redux/ducks/user';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(getuser())
  },[])

const user = useSelector(state=> state.user.user)
const count = useSelector( state => state.counter.count)

  return (
    <div className="App">
      <h1>redux saga</h1>
      {user && (
        <div className='user-container'>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <h3>count is:{count}</h3>
      <Counter/>
    </div>
  );
}

export default App;
