import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/auth/Auth";
import CreateUser from "./pages/admin/create-user/CreateUser";
import ManageUser from "./pages/admin/manage-user/ManageUser";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";

// import Login from "./components/login/Login";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Auth />} >
          <Route path="admin" element={<Admin />}>
          <Route path="usercreate" element={<CreateUser />} />
          <Route path="usermanage" element={<ManageUser />} />
          <Route path="productcreate" element={<CreateProduct />} />
          <Route path="productmanage" element={<ManageProduct />} />

        </Route>
      </Route>
      </Routes>
    </>
  );
}

export default App;
