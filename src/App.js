import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import ProductsGrid from './components/ProductsGrid'
import Home from './components/Home'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/products/:productId' element={<ProductDetails />} />
      <Route path='/products' element={<ProductsGrid />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App
