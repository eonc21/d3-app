import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3'

function App() {
  return (
    <div className="App">
      <svg width="960" height="500">

        <circle 
          cx="480"
          cy="250"
          r="245"
          fill="yellow"
          stroke="black"
          stroke-width="10"
        />
      </svg>
    </div>
  );
}

export default App;
