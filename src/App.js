import { Header } from 'Components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangeRate } from './services/store';
import { Backdrop } from 'Components/Backdrop';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const { loading, exchange } = useSelector(state => state);
  const USD = exchange.find(currency => currency.ccy === 'USD');
  const EUR = exchange.find(currency => currency.ccy === 'EUR');
  useEffect(() => {
    dispatch(getExchangeRate());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <CSSTransition
        in={loading}
        timeout={50000}
        classNames={{
          enter: styles.backdropEnter,
          enterActive: styles.backdropEnterActive,
          exit: styles.backdropExit,
          exitActive: styles.backdropExitActive,
        }}
        unmountOnExit
      >
        <Backdrop />
      </CSSTransition>

      <Header USD={USD} EUR={EUR} />
    </>
  );
}

export default App;
