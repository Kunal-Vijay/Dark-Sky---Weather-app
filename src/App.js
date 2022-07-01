import './App.css';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeandLocation from './components/TimeandLocation';
import Topbuttons from './components/Topbuttons';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Topbuttons/>
      <Inputs/> 
      <TimeandLocation/>
      <TempAndDetails/>
    </div>
  );
}

export default App;
