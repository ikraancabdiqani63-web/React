import { Routes,Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainLayout from "./Layouts/MainLayout";
import Card from "./components/Card";
import "./index.css";


function App(){

return(

<Routes>

<Route path="/" element={<Dashboard/>}/>

<Route path="/users" element={<Users/>}/>

<Route path="/products" element={<Products/>}/>

<Route path="/Orders" element={<Orders/>}/>

<Route path="/setting" element={<Setting/>}/>

</Routes>

)

}

export default App;