import { useNavigate } from 'react-router-dom'
import './MenuHelper.css'
export const MenuHelper = () => {
    const navigate = useNavigate();

    const toMenu = () =>{
        navigate('/menu-principal', { replace: true })
    }

    return <button type="button" class="menu" onClick={ toMenu }>Go Menu</button>;
    
}
