

import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Home from './components/Home';
import UsersData from './components/UsersData';

function App() {
 

  return (
    <div className="App">
    <Router>

  
      <Routes>
      <Route path='/' element={  <Home/>}/>
        <Route path='/userdetails' element={<UsersData/>}/>
      </Routes>
    </Router>
  
    </div>
  );
}

export default App;
