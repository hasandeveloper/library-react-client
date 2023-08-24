import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registration from "./components/Registration"
import Home from "./components/Home"
import Login from "./components/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Registration/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App