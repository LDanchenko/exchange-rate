import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './ConverterForm.module.css';
import { Icon } from '../Icon';

export const ConverterForm = () => {
  const exchange = useSelector(state => state.exchange);
  const [element, setElement] = useState({
    elementDom: '',
    changed: true,
  });
  const [lastInput, setInputElement] = useState('');
  const mounted = useRef(true);
  const [allValues, setAllValues] = useState({
    inputValue: 1,
    outputValue: 1,
    inputCurrency: 'USD',
    outputCurrency: 'UAH',
  });

  const convertInput = () => {
    const { inputValue, inputCurrency, outputCurrency } = allValues;
    let course = 1;
    if (inputCurrency !== outputCurrency) {
      course = exchange[inputCurrency + outputCurrency];
    }
    setAllValues({
      ...allValues,
      outputValue: (course * inputValue).toFixed(3),
    });
  };

  const convertOutput = () => {
    const { inputCurrency, outputCurrency, outputValue } = allValues;
    let course = 1;
    if (inputCurrency !== outputCurrency) {
      course = exchange[inputCurrency + outputCurrency];
    }
    setAllValues({
      ...allValues,
      inputValue: (outputValue / course).toFixed(3),
    });
  };

  const handleInput = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    setElement({ elementDom: e.target.name, changed: !element.changed });
    if (e.target.tagName === 'INPUT') {
      setInputElement(e.target.name);
    }
  };

  useEffect(() => {
    if (mounted.current) {
      mounted.current = false;
      return;
    }
    lastInput.includes('input') ? convertInput() : convertOutput();
    // eslint-disable-next-line
  }, [element.changed]);

  return (
    <main>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.title}>Currency converter</h1>
          <div className={styles.wrapper}>
            <input
              type="text"
              name="inputValue"
              className={styles.input}
              value={allValues.inputValue}
              onChange={e => handleInput(e)}
            />

            <select
              name="inputCurrency"
              className={styles.select}
              onChange={e => handleInput(e)}
            >
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
              onChange={e => handleInput(e)}
            />
            <select
              name="outputCurrency"
              className={styles.select}
              onChange={e => handleInput(e)}
            >
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
