import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PrincipalMenuPage.css'

export const PrincipalMenuPage = () => {

    const navigate = useNavigate();
    
    const toLogin = () => {
      navigate('/login', { replace: true } )
    } 

    const toTemplate1 = () => {
      navigate('/template1', { replace: true } )
    }

    
  return (
    <>
    <div class="background">
      <h1 class='title'>Principal Menu</h1>
      <div>
        {/*pending login */ }
        <button type="button" class="btnmenu" onClick={toLogin}>Login</button>
        <button type="button" class="btnmenu" onClick={toTemplate1}>Template 1</button>
        <button type="button" class="btnmenu">Info 3</button>
        <button type="button" class="btnmenu">Info 4</button>
      </div>
    </div>
    </>
  )
}