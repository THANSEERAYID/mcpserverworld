import './App.css';
import { HomePage } from './pages/homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contactPage';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Marketplace } from './pages/MarketplacePage';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<Marketplace/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
