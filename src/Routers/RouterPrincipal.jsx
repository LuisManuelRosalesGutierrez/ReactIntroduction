import { Routes, Route } from "react-router-dom"
import { Login } from "../login/Login"
import { PrincipalMenuPage } from "../PrincipalMenu/PrincipalMenuPage"
import { Template1 } from "../Template1/Template1"

export const RouterPrincipal = () => {
    return (
        <Routes>
            <Route path="login" element={<Login/>}/>

            <Route path="/menu-principal" element={<PrincipalMenuPage/>}/>
            <Route path="/template1" element={<Template1/>}/>
            <Route path="/" element={<PrincipalMenuPage/>}/>
        </Routes>
    )
}