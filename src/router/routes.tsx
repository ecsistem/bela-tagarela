import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"
import  {Vocalizador}  from '../pages/Vocalizador'
import  {Prancha}  from '../pages/Prancha'
// import  {FormPDF}  from './../pages/CreatePDF/index'

export function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/vocalizador" element={<Vocalizador/>}/>
            <Route path="/prancha" element={<Prancha/>}/>
        </Routes>

    )
}