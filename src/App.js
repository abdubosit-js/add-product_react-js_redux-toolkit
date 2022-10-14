import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddProducts } from "./components/AddProduct";
import PrivateRoute from "./components/PrivateRoute";
import { SignUp } from "./pages/SignUp";
import { Description } from "./pages/Description";

function App() {
  
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="product/:id" element={<Description />} />
        <Route path="addproduct" element={
            <PrivateRoute>
              <AddProducts />
            </PrivateRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
