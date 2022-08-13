import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>} exact />
    <Route path="/signup" element={<Signup/>} exact />
    <Route path="/login" element={< Login />} exact />
    </Routes>
   

    </BrowserRouter>
  );
}

export default App;
