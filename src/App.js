import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3'
import './App.css'

const centerX = 980;
const centerY = 500;

function App() {


  let mouth = d3.arc()
  .innerRadius(100)
  .outerRadius(110)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/2)

  return (
    <div className="App">
      <svg className="svg">
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle 
            className="circle"
            r="245"
            fill="yellow"
            stroke="black"
            strokeWidth="10"
          />
          <circle 
            className="circle"
            cx="-100"
            cy="-60"
            r="50"
          />

          <circle 
            className="circle"
            cx="100"
            cy="-60"
            r="50"
          />
          <path d={mouth()} />
        </g>
        
      </svg>
    </div>
  );
}

export default App;
