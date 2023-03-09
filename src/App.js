import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home'
import Header from './Component/Header';
import Coins from './Component/Coins'
import Exchanges from './Component/Exchanges'
import CoinDetail from './Component/CoinDetail';
import Footer from './Component/Footer';




function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/coins' element={<Coins />} />
      <Route path='/exchange' element={<Exchanges />} />
      <Route path='/coin/:id' element={<CoinDetail />} />
    </Routes>
    <Footer />
  </Router>
  
}

export default App;
