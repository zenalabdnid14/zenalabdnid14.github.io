import './App.css';
import Navigasi from './Component/Navigasi';
import "./style/style.css"
import Intro from './Component/Intro';
import Bio from './Component/Bio';


function App() {
  return (
    <div>
      {/* Start Intro */}
      <div className='bg-image'>
          <Navigasi />
        <div>
          <Intro />
        </div>
      </div>
      {/* End Intro */}

      {/* Start Bio */}
      <div className='bg-bio'>
        <Bio />
      </div>
      {/* End Bio */}
    </div>
  );
}

export default App;
