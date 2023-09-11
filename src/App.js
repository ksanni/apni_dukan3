import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import NotFound from './Components/NotFound';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='*' element={<NotFound/>} />
      <Route />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
