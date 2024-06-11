import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Main/Home";
import Contacts from "./Pages/Main/Contacts";
import Search from "./Pages/Main/Search";
import ProductDetails from "./Pages/Main/ProductDetails";
import { ToastContainer } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./Pages/Authentication/Signup";
import Signin from "./Pages/Authentication/Signin";

function App() {
  return (
    <div>
       <ToastContainer />
         <Router>
             <Routes>
                  <Route path="/"  element={<Home title={""} />} />
                  <Route path="/contacts"  element={<Contacts title={""} />} />
                  <Route path="/signup"  element={<Signup title={""} />} />
                  <Route path="/signin"  element={<Signin title={""} />} />
                  <Route path="/products"  element={<Search title={""} />} />
                  <Route path="/product_details"  element={<ProductDetails title={""} />} />
             </Routes>
         </Router>
    </div>
  );
}

export default App;
