import { Route, Routes } from 'react-router-dom';
import './App.css';
import Location from './components/Location/Location';
import Login from './components/Login/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/store' element={<Location></Location>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
