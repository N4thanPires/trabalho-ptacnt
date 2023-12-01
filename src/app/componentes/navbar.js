'use client'
import { validateToken } from "../functions/validateToken";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import '../pages/css/navbar.css';

export default function Navbar() {
    const { push, replace } = useRouter();

    const removeCookies = async (e) => {
        e.preventDefault();
        Cookies.remove('token');
        localStorage.removeItem('name');
        replace('/');
    }

    return (
        <div>
            <ul className="navbar" role="navigation">
                <li><a href='/pages/alterar'>Alterar</a></li>
                <li><a href='/pages/dashboard'>Home</a></li>
                <li><a href='/pages/registro'>Registro</a></li>
                <li><button className="clear" onClick={removeCookies}>LIMPAR</button></li>
            </ul>
        </div>
    );
}
