import { Header } from 'Components/Header';
import { useGetRateQuery } from './services/bank-api';

import './App.css';

function App() {
  const { data, error, isLoading } = useGetRateQuery();

  return !isLoading && <Header data={data} />;
}

export default App;
