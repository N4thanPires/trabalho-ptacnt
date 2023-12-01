'use client'

import { useState } from "react";

import handlerAcessUser from "./functions/handlerAcess";

import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './pages/css/login.css'


export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault(); 
    try {
      
      const userAuth = await handlerAcessUser(user);
      
      if (userAuth.token === undefined) {
        toast.error("Erro novamente"); 
      }
     
      push('/pages/dashboard');
    } catch {
      toast.error("Erro de novo, poxa"); 
    }
  }

  
  return (
    <div className="caixa">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        
        <input
          placeholder='leo@gmail.com'
          type="email"
          
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='123'
          type='password'
          
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="btn">Entrar</button>
      </form>
      {}
      <ToastContainer/>
    </div>
  )
}
