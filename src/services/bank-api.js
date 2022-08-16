import axios from 'axios';
import { API_KEY } from './key';

export const fetchExchangeRateUSD = () => {
  const data = axios.get('https://api.apilayer.com/currency_data/live', {
    params: {
      source: 'USD',
      currencies: 'UAH,EUR',
    },
    headers: { apikey: API_KEY },
  });
  return data;
};

export const fetchExchangeRateEUR = () => {
  const data = axios.get('https://api.apilayer.com/currency_data/live', {
    params: {
      source: 'EUR',
      currencies: 'UAH,USD',
    },
    headers: { apikey: API_KEY },
  });
  return data;
};

export const fetchExchangeRateUAH = () => {
  const data = axios.get('https://api.apilayer.com/currency_data/live', {
    params: {
      source: 'UAH',
      currencies: 'EUR,USD',
    },
    headers: { apikey: API_KEY },
  });
  return data;
};
