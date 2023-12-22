import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
       
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Register />}></Route>
          {/* <Route path="/Login" element={<Login />}></Route> */}
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
