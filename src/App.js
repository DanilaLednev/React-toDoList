
import './App.css';
import { Clock } from './Clock';
import {  Day } from './Day';
import { Schedule } from './Schedule';

function App() {
  return (
    <div className="App">
      <div className='container-date'>
      <Clock />
      <Day />
      </div>
      <div>
      <div className='header'>
        <h1>Plans</h1>
        </div>
      </div>
      <Schedule />
    </div>
  );
}

export default App;
