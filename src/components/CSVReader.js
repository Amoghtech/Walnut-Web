import { useState } from 'react';

export default function CsvReader() {
  const [csvFile, setCsvFile] = useState();

  const [csvArray, setCsvArray] = useState([]);
  const [csvHeader, setCsvHeader] = useState([]);

  const processCSV = (str, delim = ',') => {
    let t = str;
    for (let i = 0; i < 6; i++) {
      //   x = str.indexOf('\n');
      t = t.slice(t.indexOf('\n') + 1);
    }
    console.log('t: ', t);

    setCsvHeader(t.slice(0, t.indexOf('\n')).split(delim));
    console.log('headers: ', csvHeader);
    const rows = t.slice(t.indexOf('\n') + 1).split('\n');
    console.log('rows: ', rows);

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      console.log('row: ', values);
      const eachObject = csvHeader.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });
    console.log('newarray: ', newArray);

    setCsvArray(newArray);
  };

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      console.log(text);
      processCSV(text);
    };

    reader.readAsText(file);
  };

  return (
    <form id='csv-form'>
      <input
        type='file'
        accept='.csv'
        id='csvFile'
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
      ></input>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (csvFile) submit();
        }}
      >
        Submit
      </button>
      {csvArray.length > 0 ? (
        <>
          <table>
            <thead>
              {csvHeader.map((header) => (
                <th>{header}</th>
              ))}
            </thead>
            <tbody>
              {csvArray.map((item, i) => {
                  
                let x = Object.values(item);

                return (
                  <tr key={i}>
                    {x.map((ii) => (
                      <td>{ii}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : null}
    </form>
  );
}
