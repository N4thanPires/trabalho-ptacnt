'use client' 

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useRouter } from 'next/navigation'; 
import Navbar from '@/app/componentes/navbar'; 
import '../css/registro.css'; 
import { postUser } from '@/app/functions/handlerAcessAPI';


export default function Registro() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { push } = useRouter();

  const registro = async (e) => {
    e.preventDefault();
    try{
      await postUser(user);
      await new Promise((resolve) => {
        toast.success("Registrado com suxso");
        setTimeout(resolve, 5000);
      });
      return push("/pages/dashboard") 
    }
    catch{
       return toast.error("erro")
    }
  };
  

  return (
    <div>
      <Navbar />
      <form onSubmit={registro}>
        <div className="caixa">
          <p>NOME</p>
          <input type="text" name="name" required value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <p>EMAIL</p>
          <input type="email" name="email" required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <p>SENHA</p>
          <input type="password" name="password" required value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <p></p>
          <button className="btn" type="submit">
            Registrar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}