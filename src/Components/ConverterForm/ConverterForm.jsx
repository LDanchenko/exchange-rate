import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './ConverterForm.module.css';
import { Icon } from '../Icon';
import { debounce, throttle } from 'lodash';

export const ConverterForm = () => {
  const exchange = useSelector(state => state.exchange);
  console.log(exchange);
  const formRef = useRef();

  const [allValues, setAllValues] = useState({
    inputValue: 1,
    outputValue: 1,
    inputCurrency: 'USD',
    outputCurrency: 'UAH',
  });
  const changeHandler = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const convert = () => {};

  useEffect(() => {
    console.log('inputValue: ' + allValues.inputValue);
    console.log('outputValue: ' + allValues.outputValue);
    console.log('inputCurrency: ' + allValues.inputCurrency);
    console.log('outputCurrency: ' + allValues.outputCurrency);
  }, [allValues]);

  const handleChange = evt => {
    console.log(evt.target.name);
  };

  return (
    <main>
      <div className={styles.container}>
        <form
          ref={formRef}
          className={styles.form}
          onChange={e => changeHandler(e)}
        >
          <h1 className={styles.title}>Currency converter</h1>
          <div className={styles.wrapper}>
            <input
              type="text"
              name="inputValue"
              className={styles.input}
              value={allValues.inputValue}

              // validate={debounce(value => validateInput(value), 300)}
            />

            <select name="inputCurrency" className={styles.select}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="UAH">UAH</option>
            </select>
            <span>
              <Icon name="arrows" color="black" size="30" />
            </span>
            <input
              type="text"
              name="outputValue"
              value={allValues.outputValue}
              className={styles.input}
            />
            <select name="outputCurrency" className={styles.select}>
              <option value="UAH">UAH</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </form>
      </div>
    </main>
  );
};
