import Loader from './components/Loader';
import './App.css';
import Chart from './components/Chart';
import {useState} from 'react'
import Papaparser from './components/PapaParser';
import Data from './components/Data';
function App() {


  const [amounts,setamounts]=useState([])

  const [csvHeader, setCsvHeader] = useState([]);
  const [csvArray, setCsvArray] = useState([]);

  const [loader,setloader]=useState(false)


  return (
    <div className='App'>
        
        <Papaparser setCsvArray={setCsvArray} setCsvHeader={setCsvHeader} setloader={setloader} setamounts={setamounts} />
       
        {loader && <Loader />}
        <Chart amounts={amounts} loader={loader} />
        <Data csvArray={csvArray} csvHeader={csvHeader} loader={loader} />
    </div>
  );
}

export default App;
