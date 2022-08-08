import { Header } from 'Components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchangeRate } from './services/store';
import { CSSTransition } from 'react-transition-group';
import { Backdrop } from 'Components/Backdrop';
import { ConverterForm } from 'Components/ConverterForm';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const { loading, exchange } = useSelector(state => state);
  const USD = exchange.USDUAH;
  const EUR = exchange.EURUAH;
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
          exitDone: styles.backdropExitDone,
        }}
        unmountOnExit
      >
        <Backdrop />
      </CSSTransition>

      <Header USD={USD} EUR={EUR} />
      <ConverterForm />
    </>
  );
}

export default App;
