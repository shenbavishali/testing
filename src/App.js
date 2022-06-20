
import './App.css';
import ColorSelector from './ColorSelector';
import Login from './Login';
import Profile from './Profile';
import Nav from './navbar/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <h1>Redux</h1>
      <Routes>
       
      <Route path='/profile' element={<Profile />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/colorselector' element={<ColorSelector />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
