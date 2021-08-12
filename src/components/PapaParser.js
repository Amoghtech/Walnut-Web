import { useState } from 'react';
import { parse } from 'papaparse';
import './Papaparser.css';
import Loader from './Loader';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function Papaparser({
  setCsvArray,
  setCsvHeader,
  setloader,
  setamounts,
  setcurrmonth,
}) {
  const [highlighted, sethighlighted] = useState(false);

  const [border, setborder] = useState(false);
  const handleChange = async (e) => {
    setloader(true);
    
          sethighlighted(true);
    let file = e.target.files[0];
    const str = await file.text();
    let temp = str;
    for (let i = 0; i < 6; i++) {
      //   x = str.indexOf('\n');
      temp = temp.slice(temp.indexOf('\n') + 1);
    }

    const res = parse(temp, { header: true });
    let months = [];
    let t = res.data[0].AMOUNT.split(',');
    let s = t[0] + t[1];
    let m = +res.data[0].DATE.split('-')[1].replace(/^0+/, ''),
      c = +s;
    for (let i = 1; i < res.data.length; i++) {
      if (res.data[i].AMOUNT === undefined || res.data[i].AMOUNT === '') {
        break;
      }
      if (
        res.data[i].DATE.split('-')[1] !== res.data[i - 1].DATE.split('-')[1]
      ) {
        months.push({ month: m, amount: c });

        t = res.data[i].AMOUNT.split(',');
        if (t.length === 1) {
          s = +t[0];
        } else {
          s = +(t[0] + t[1]);
        }
        c = s;

        m = +res.data[i].DATE.split('-')[1].replace(/^0+/, '');
      } else {
        t = res.data[i].AMOUNT.split(',');
        console.log('t: ', t);
        if (t.length === 1) {
          s = +t[0];
        } else {
          s = +(t[0] + t[1]);
        }
        c = c + s;
      }
    }

    months.push({ month: m, amount: c });

    setTimeout(() => {
      const date = new Date();
      let g;
      months.forEach((m) => {
        if (m.month - 1 === date.getMonth()) {
          g = m.amount;
        }
      });
      setcurrmonth({ name: monthNames[date.getMonth()], amount: g });
      setamounts(months);
      setCsvArray(res.data);

      setCsvHeader(Object.keys(res.data[0]));
      setloader(false);
    }, 2000);
  };
  return (
    <div className='input-container'>
      <div
        className={`dropper ${highlighted && 'highlight'} ${border && 'bdr'}`}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={() => {
          sethighlighted(true);
          setborder(true);
        }}
        onDragLeave={() => {
          sethighlighted(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setborder(false);
          setloader(true);
          Array.from(e.dataTransfer.files).forEach(async (file) => {
            const str = await file.text();

            let temp = str;
            for (let i = 0; i < 6; i++) {
              //   x = str.indexOf('\n');
              temp = temp.slice(temp.indexOf('\n') + 1);
            }

            const res = parse(temp, { header: true });
            let months = [];
            let t = res.data[0].AMOUNT.split(',');
            let s = t[0] + t[1];
            let m = +res.data[0].DATE.split('-')[1].replace(/^0+/, ''),
              c = +s;
            for (let i = 1; i < res.data.length; i++) {
              if (
                res.data[i].AMOUNT === undefined ||
                res.data[i].AMOUNT === ''
              ) {
                break;
              }
              if (
                res.data[i].DATE.split('-')[1] !==
                res.data[i - 1].DATE.split('-')[1]
              ) {
                months.push({ month: m, amount: c });

                t = res.data[i].AMOUNT.split(',');
                if (t.length === 1) {
                  s = +t[0];
                } else {
                  s = +(t[0] + t[1]);
                }
                c = s;

                m = +res.data[i].DATE.split('-')[1].replace(/^0+/, '');
              } else {
                t = res.data[i].AMOUNT.split(',');
                console.log('t: ', t);
                if (t.length === 1) {
                  s = +t[0];
                } else {
                  s = +(t[0] + t[1]);
                }
                c = c + s;
              }
            }

            months.push({ month: m, amount: c });

            setTimeout(() => {
              const date = new Date();
              let g;
              months.forEach((m) => {
                if (m.month - 1 === date.getMonth()) {
                  g = m.amount;
                }
              });
              setcurrmonth({ name: monthNames[date.getMonth()], amount: g });
              setamounts(months);
              setCsvArray(res.data);

              setCsvHeader(Object.keys(res.data[0]));
              setloader(false);
            }, 2000);
          });
        }}
      >
      <input
        className='csv-input'
        type='file'
        name='file'
        onChange={handleChange}
      />&nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp;  DROP HERE
      </div>
   
    </div>
  );
}

export default Papaparser;
