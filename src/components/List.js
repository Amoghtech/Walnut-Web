import Listitem from './List-item';
import './List.css';
import cr from '../icons/right-arrow.png'
import dr from '../icons/arrow.png'
import atm from '../icons/atm.png'
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

const List = (props) => {
  const clickhandler = (obj) => {
    console.log(obj);
    // props.setsingleitem(obj);
  };
  console.log(props.csvArray);
  let data = props.csvArray.map((obj) => {
  
    if (obj.DATE === undefined || obj.DATE === '') {
      return null;
    }
    let m = +obj.DATE.split('-')[1].replace(/^0+/, '');
    let d = +obj.DATE.split('-')[0].replace(/^0+/, '');

    return {
      month: m,
      date: d,
      price: obj.AMOUNT,
      name: obj.PLACE,
      account: obj.ACCOUNT,
      type:obj["DR/CR"]
    };
  });
  data = data.filter((d) => d !== null);
  return (
    <div>
      {props.singleitem !== null && <Listitem item={props.singleitem} />}
      <ul className='list'>
        {data.map((obj) => (
          <li className='list-item' onClick={clickhandler.bind(null, obj)}>
          <div className="atm"> <img src={atm} alt="ATM"/></div>
            <h4>{obj.name}</h4>
            <div className='date-item'>
              <p className='date'>
                {obj.date} - {monthNames[obj.month - 1]}{' '} <img style={{height: "12px"}} src={obj.type==='CR'?dr:cr} alt="icon"/>
              </p>
              <p className='price'>₹ {obj.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
