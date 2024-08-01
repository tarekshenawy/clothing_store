import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import Shopcategory from "./Pages/Shopcategory";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import banner_men from "./Components/Images/banner_mens.png";
import banner_women from "./Components/Images/banner_women.png";
import banner_kids from "./Components/Images/banner_kids.png";
import Product from "./Pages/Product";

function App() {
  return (
    <div>
      
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}> </Route>
        <Route path="/mens" element={<Shopcategory category="men" banner={banner_men}/>}></Route>
        <Route path="/womens" element={<Shopcategory category="women" banner={banner_women}/>}></Route>
        <Route path="/kids" element={<Shopcategory category="kid" banner={banner_kids}/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}></Route>
        </Route>

    </Routes>

      </BrowserRouter>
    
     
      
      <Footer/>

    </div>
   
    
   
    
     
     

   
  
  )
}

export default App;
