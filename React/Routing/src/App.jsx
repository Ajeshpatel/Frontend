// import './App.css'
import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"

function App() {


  return (
    <>
      <Navbar />
      <h1>Welcome To React Routing</h1>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App
