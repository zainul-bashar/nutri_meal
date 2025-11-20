import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Homepage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/home' element={<Home/>}/>
      </Routes>
        {/* <HomePage/> */}
    </div>
  );
}

export default App;
