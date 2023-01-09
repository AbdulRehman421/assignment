import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import Auth from './pages/Auth'
import Login from './pages/Login'
import { useEffect } from 'react';
function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const checkStorage = (key) => {
      const storedData = localStorage.getItem(key);
      if (storedData) {
        navigate('/loggedIn');
        console.log('Already logged in')
      }
      else {
        console.log('empty');
      }
    }

    checkStorage("clapingo")
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/auth' element={<Auth />} />
        <Route path='/loggedIn' element={<Login />} />
      </Routes>
      {/* Media at 1200*/}
      {/* Media at 1000*/}
      {/* Media at 900*/}
      {/* Media at 500*/}
    </div>
  );
}

export default App;
