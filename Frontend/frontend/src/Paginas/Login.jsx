import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../url';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url+'/api/users/login', { username });
      if (response.data) {
        // Guardar el usuario en localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        if (response.data.isAdmin) {
          navigate('/admin');
        } else {
          navigate('/home');
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div className=" 
                        h-[100vh] 
                        w-full 
                        flex 
                        items-center
                        justify-center
                        bg-gradient-to-r from-[#2a2a72] to-[#009ffd] ">
        <div className="bg-white 
                        p-12
                        rounded-2xl
                        w-[500px]
                        shadow-md
                        shadow-slate-900
                         ">
          <h1 className="font-bold
                         text-4xl
                         flex
                         justify-center
                         mb-12
                          ">
            Entrar al panel</h1>

            <form onSubmit={handleSubmit}>
                <input className="w-full
                          bg-slate-300
                          border-solid border-2 border-gray-400 border-rounde
                          focus:outline-none focus:border-sky-800
                          focus:shadow-custom
                          focus:shadow-gray-500
                          focus:bg-slate-200
                          my-2
                          rounded
                          text-xl
                          py-1 pl-2 
                          "  placeholder='Ingrese Username'     type="text" value={username} onChange={e => setUsername(e.target.value)} />
              <button className="bg-blue-600
                           text-white
                           w-full
                           py-1.5
                           rounded
                           text-xl
                           my-2
                           hover:bg-blue-700" type="submit">Login</button>
            </form>
        </div>
      </div>
  );
}

export default Login;