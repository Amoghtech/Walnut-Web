import im from '../images/step-1.png';
import play from '../images/google-play.png';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>How to export data from Walnut app?</h2>
      <img src={im} style={{width:"350px",height:"350px"}} alt='Screenshot' />
      <p style={{margin:"30px 9rem"}}>
        You can now export your data from the app. Tap on the filter icon that
        appears on the top right of your screen when viewing your spends for a
        month, account information or tags. Select the date range, review the
        data and export it. You will receive your report via email in PDF and
        CSV (Excel) format.
      </p>
      <a href='https://play.google.com/store/apps/details?id=com.daamitt.walnut.app&referrer=utm_source%3DBlog%26utm_medium%3DExportPost%26utm_campaign%3DExportPost'>
        <img src={play} className='play' alt='download' />
      </a>{' '}
    </div>
  );
};

export default Home;
