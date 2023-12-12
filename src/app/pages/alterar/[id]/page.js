'use client'
import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/app/componentes/navbar";
import { updateUser } from "@/app/functions/handlerAcessAPI";
import {useRouter} from 'next/navigation';


export default function Alterar({params}) {

  const [user, setUser] = useState({
name:'',
email:'',
password:''
  });

  const { push } = useRouter();

 const alterar= async (e) => {
    e.preventDefault();
    try{
    await updateUser(user, params.id);
    await new Promise((resolve) => {
      toast.success("boaa altero");
      setTimeout(resolve, 5000);
    });
    return push("/pages/dashboard") 
  }
  catch{
     return toast.error("erro")
  }
}

  return (
    <div>
      <Navbar />
      <form onSubmit={alterar}>
        <div className="caixa">
          <p>NOME</p>
          <input type="text" required  onChange={(e) => { setUser({ ...user, name: e.target.value })}} />
          <p>EMAIL</p>
          <input type="email" required  onChange={(e) => { setUser({ ...user, email: e.target.value })}} />
          <p>SENHA</p>
          <input type="password" required  onChange={(e) => { setUser({ ...user, password: e.target.value })}} />
          <p></p>
          <button className="btn">Alterar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};