'use client' 

import React, { useState } from 'react'; // Importa o módulo React e a função useState.
import { ToastContainer, toast } from 'react-toastify'; // Importa os componentes ToastContainer e toast do módulo react-toastify.
import 'react-toastify/dist/ReactToastify.css'; // Importa os estilos CSS para o react-toastify.
import { useRouter } from 'next/router'; // Importa a função useRouter do módulo next/router.
import Navbar from '@/app/componentes/navbar'; // Importa o componente Navbar de um caminho específico no projeto.
import '../css/registro.css'; // Importa o arquivo CSS de estilo para esta página.

export default function Registro() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { push, refresh } = useRouter();

  function registro(e) {
    e.preventDefault();
    toast.success('ebaaaaaaa');
  }

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
            Cadastrar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
