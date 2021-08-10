import CsvReader from './components/CSVReader';
import './App.css';
import Chart from './components/Chart';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <CsvReader />
        <Chart />
      </header>
    </div>
  );
}

export default App;
