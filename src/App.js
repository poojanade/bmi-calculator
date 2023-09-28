
import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setheight] = useState(null);
  const [weight, setweight] = useState(null);
  const [BMI, setBMI] = useState();
  const [range, setrange] = useState();
  const [status, setstatus] = useState();

  // update value
  const onSetHeight = e => {
    const value = e.target.value;
    setheight(value);
  }

  // update value
  const onSetWeight = e => {
    const value = e.target.value;
    setweight(value);
  }

  const calculateBMI = () => {
    const result = [weight / height / height] * 10000;
    setBMI(`Your BMI is:${result.toFixed(2)}`);

    let bmirange
    if (weight < 50) {
      bmirange = "Below 50";
    } else if (weight >= 50 && weight <= 67) {
      bmirange = "50 to 67";
    }
    else if (weight >= 68 && weight <= 82) {
      bmirange = "68 to 82";
    } else if (weight >= 82) {
      bmirange = "above 82";
    }
    setrange(`Your suggested weight range in between ${bmirange}.`);

    let bmistatus = "Obese";
    if (result <= 18.5) {
      bmistatus = "Underweight";
    } else if (result >= 18.5 && result <= 24.9) {
      bmistatus = "Healthy";
    } else if (result >= 25 && result <= 29.9) {
      bmistatus = "Overweight";
    } else {
      bmistatus = "Obese";
    }
    setstatus(`You are is a ${bmistatus} weight range.`)
  }

  return (
    <div className="App">
      <div className="head">
        <h2 className="h1">BMI Calculator</h2>
      </div>
      <div className='body'>
        <label>Enter your Height in cm:</label><br />
        <input className="hwvalue" value={height} onChange={onSetHeight} />
      </div>
      <div className='body'>
        <label>Enter your Weight in kg:</label><br />
        <input className="hwvalue" value={weight} onChange={onSetWeight} />
      </div>
      <div>
        <button className="btn" disabled={!weight || !height} onClick={calculateBMI}>Submit </button>
      </div><br/><br/>
      <div className='body'>
        <span>{BMI}</span><br />
        <span> {range}</span><br />
        <span>{status} </span>
      </div>
    </div>
  );
}

export default App;
