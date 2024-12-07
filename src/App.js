import './App.css';
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Romance from './components/Romance';
import "./style/landingpage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
      <NavigationBar/>
      <Intro/>
      </div>
      {/* end of intro */}

      {/* Trending Section */}
      <div className="trending">
        <Trending></Trending>
      </div>
      {/* end of trending */}

      {/* Romance Section */}
      <div className='romance'>
        <Romance></Romance>
      </div>
      {/* End Romance Section */}
    </div>
  );
}

export default App;
