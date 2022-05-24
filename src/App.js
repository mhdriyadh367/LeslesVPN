import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Ceklis from './components/Ceklis';
import Plan from './components/Plan';
import Network from './components/Network';
import Review from './components/Review';
import Footer from './components/Footer';

import "./style/landingpage.css"
function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
      </div>

      <div className='Ceklis'>
        <Ceklis/>
      </div>

      <div className='Plan'>
        <Plan/>
      </div>

      <div className='Network'>
        <Network/>
      </div>

      <div className='Review mt-5'>
        <Review/>
      </div>
      <div className='Footer mt-5'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
