import { Header } from 'Components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangeRate } from './services/store';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const aaa = useSelector(state => state);
  useEffect(() => {
    dispatch(getExchangeRate());
  }, []);
  // console.log('loading ' + loading);

  console.log(aaa);
  return <Header />;
}

export default App;
