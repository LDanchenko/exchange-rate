import { Header } from 'Components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangeRate } from './services/store';
import { Backdrop } from 'Components/Backdrop';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { loading, exchange } = useSelector(state => state);
  const USD = exchange.find(currency => currency.ccy === 'USD');
  const EUR = exchange.find(currency => currency.ccy === 'EUR');
  useEffect(() => {
    dispatch(getExchangeRate());
  }, []);

  return (
    <>
      {loading && <Backdrop />}
      <Header USD={USD} EUR={EUR} />
    </>
  );
}

export default App;
