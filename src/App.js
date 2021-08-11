import Loader from './components/Loader';
import bari from './icons/bar-chart.png';
import piei from './icons/pie-chart.png';
import detailsi from './icons/details.png';
import listi from './icons/list.png';
import './App.css';
import List from './components/List';
import Chart from './components/Chart';
import { useState } from 'react';
import Papaparser from './components/PapaParser';
import Data from './components/Data';

function App() {
  const [amounts, setamounts] = useState([]);
  const [currmonth, setcurrmonth] = useState(null);
  const [changebar, setchangebar] = useState(-1);
  const [csvHeader, setCsvHeader] = useState([]);
  const [csvArray, setCsvArray] = useState([]);
  const [singleitem, setsingleitem] = useState(null);
  const [loader, setloader] = useState(false);

  return (
    <div className='App'>
      <Papaparser
        setCsvArray={setCsvArray}
        setCsvHeader={setCsvHeader}
        setloader={setloader}
        setamounts={setamounts}
        setcurrmonth={setcurrmonth}
      />

      {loader && <Loader />}
      {!loader && csvArray.length > 0 && (
        <div className='icons'>
          <div className='details'>
            <img
              src={listi}
              alt='list'
              onClick={() => {
                setloader(true);
                setTimeout(() => {
                  setloader(false);

                  setchangebar(-1);
                }, 2000);
              }}
            />
            <img
              src={detailsi}
              alt='Details'
              onClick={() => {
                setloader(true);

                setTimeout(() => {
                  setloader(false);

                  setchangebar(0);
                }, 2000);
              }}
            />
          </div>
          <div className='bars'>
            <img
              src={bari}
              alt='Bar'
              onClick={() => {
                setloader(true);

                setTimeout(() => {
                  setloader(false);

                  setchangebar(1);
                }, 2000);
              }}
            />
            <img
              src={piei}
              alt='Pie'
              onClick={() => {
                setloader(true);

                setTimeout(() => {
                  setloader(false);

                  setchangebar(2);
                }, 2000);
              }}
            />
          </div>
        </div>
      )}
      {currmonth !== null && !loader && (
        <div className='month'>
          <p>Curr mnth: {currmonth.name}</p>
          <p>Curr mnth amount: ₹ {currmonth.amount}</p>
        </div>
      )}
      {amounts.length > 0 && !loader && (
        <Chart amounts={amounts} loader={loader} bar={changebar} />
      )}
      {changebar === 0 && !loader && (
        <Data
          csvArray={csvArray}
          currmonth={currmonth}
          csvHeader={csvHeader}
          loader={loader}
        />
      )}
      {changebar === -1 && !loader && csvArray.length > 0 && (
        <List
          csvArray={csvArray}
          loader={loader}
          singleitem={singleitem}
          setsingleitem={setsingleitem}
        />
      )}
    </div>
  );
}

export default App;
