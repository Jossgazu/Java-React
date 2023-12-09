import React, { useState, useEffect } from 'react';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';

function HomePages({children}) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
      <h1>Bienvenido, {user.username}!</h1>
      <p>Tu puntuacion es: {user.score}</p>
      <p>Tu {user.isAdmin ? 'eres un admin' : 'no eres un admin'}.</p>
      <Logout/>

    </div>
  );
}

export default HomePages;