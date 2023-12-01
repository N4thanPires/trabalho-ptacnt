'use client'

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/app/componentes/navbar";
import '../css/alterar.css';
import { getUsers, updateUser } from "@/app/functions/handlerAcessAPI";
import { useState } from "react";
import {useRouter} from 'next/navigation';

export default function Alterar({params}) {

  const [user, setUser] = useState({
name:'',
email:'',
password:'',
  });

  const { push } = useRouter();

 const handlerFormsubmit= async (e) =>{
    e.preventDefault();
    await updateUser(user, params.id);
    toast.success("boa pai");
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={alterar}>
        <div className="caixa">
          <p>NOME</p>
          <input type="text" required />
          <p>EMAIL</p>
          <input type="email" required />
          <p>SENHA</p>
          <input type="password" required />
          <p></p>
          <button className="btn">Alterar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

