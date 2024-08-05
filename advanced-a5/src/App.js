import './App.css';
import { FitlerProvider } from './context/FilterContext';
import SalesApp from './components/SalesApp/SaleApp';
import SalesTableFilter from './components/SalesTableFilter/SalesTableFilter';

function App() {
  return (
    <FitlerProvider>
      <SalesTableFilter />
      <SalesApp />
    </FitlerProvider>
  );
}

export default App;
