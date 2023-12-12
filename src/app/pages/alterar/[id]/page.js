'use client'
import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/app/componentes/navbar";
import { updateUser } from "@/app/functions/handlerAcessAPI";
import {useRouter} from 'next/navigation';
import './alterar.css'



export default function Alterar({params}) {

  const [user, setUser] = useState({
name:'',
email:'',
password:''
  });

  const { push } = useRouter();

  const alterar = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user, params.id);
      await new Promise((resolve) => {
        toast.success("Alteração realizada com sucesso!");
        setTimeout(resolve, 5000);
      });
      return push("/pages/dashboard")
    } catch {
      return toast.error("Erro ao realizar a alteração");
    }
  }

  return (
    <div className="alterar-container">
      <Navbar />
      <form onSubmit={alterar} className="form-container">
        <div className="form-group">
          <label htmlFor="name">NOME</label>
          <input
            type="text"
            id="name"
            required
            onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">SENHA</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
          />
        </div>
        <button className="btn">Alterar</button>
      </form>
      <ToastContainer />
    </div>
  );
};