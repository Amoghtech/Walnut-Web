import Loader from './Loader';
import "./Data.css"
const Data = ({ csvArray, csvHeader, loader, currmonth }) => {
  return (
    <>
      <div className='list'>
        {csvArray.length > 0 && !loader && (
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
        )}
      </div>
    </>
  );
};

export default Data;
