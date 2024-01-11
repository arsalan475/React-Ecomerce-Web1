import MenuAppBar from './Compnents/Nav'
import ProductPage from './compnents/ProductPage'
import LandingPage from './Compnents/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductOverview from './compnents/ProductOverview'
export default function App() {
  return <>
    <BrowserRouter>
    <MenuAppBar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='products' element={<ProductPage />} />
        <Route path='products/:id' element={<ProductOverview />} />
        <Route path='*' element={ <ProductOverview/>} />
    </Routes>
    </BrowserRouter>
    
    

    
    </>
}