import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';

// App decides which page to show, based on the address in the browser
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
