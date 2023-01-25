import Contact from "./Contact/Contact";
import Heading from "./Heading/Heading";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Nomatch from "./Nomatch/Nomatch";
import Register from "./Register/Register";
import Product from "./Product/Product";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
import { BrowserRouter,Link,NavLink,Route ,Routes } from "react-router-dom";
import Users from "./Users/Users";
import User from "./Users/User";
import Spinner from "./Spinners/Spinner";
// import { BrowserRouter,Routes,Route } from "react-router-dom";


function App(){
  const userlist=[
    {
    id:1,fullname:"john",
    },
    {
        id:2,fullname:"harry",
    },
    {
        id:3,fullname:"namo",
    },

]
  return(<div>
    <Spinner/>
    <BrowserRouter>
     <Heading/>
     <Routes>
     <Route path="" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<Nomatch/>}/>
      <Route path="product/:id" element={<Product/>}/>
      <Route path="users" element={<Users list={userlist}/>}>

        <Route path=":id" element={<User/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
   

    
    {/* <NavLink to="hariom">Hariom</NavLink> */}
  </div>)

}
export default App;