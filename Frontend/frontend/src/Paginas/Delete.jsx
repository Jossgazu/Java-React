import React from 'react';
import axios from 'axios';
import { url } from '../url';

function DeleteQuery({ queryId }) { // Recibe queryId como prop

  const handleDelete = () => {
    axios.delete(url+`/api/query/${queryId}`)
      .then(response => {
        alert('Consulta eliminada con éxito');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <button className='bg-red-500 border-2 border-black rounded-lg' formMethod='DELETE' onClick={handleDelete} type='submit' >Eliminar</button>
    </div>
  );
}

export default DeleteQuery;