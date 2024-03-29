import Navbar from './components/navbar/Navbar'
import Anim from './components/animtop/Anim'
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import Footer from './pages/footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products.jsx';
import Basket from './pages/basket/Basket.jsx'
import { useNavigate } from 'react-router-dom'
import Buy from './pages/buy/Buy';



function App() {
  const navigation = useNavigate()
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/buy" element={<Buy />} />

      </Routes>
      <Footer />
    </>


  );
}

export default App;
