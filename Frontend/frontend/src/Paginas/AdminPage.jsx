
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { url } from '../url';
import { UpdateQuery } from './Update';
import Logout from './Logout';
import DeleteQuery from './Delete';

function QueryPage() {
  const [queries, setQueries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url+'/api/query')
      .then(response => {
        setQueries(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
    alert(`Navegando a la página de edición para la consulta con ID ${id}`);
  };
  const handleDelete = (id) => {
    axios.delete(`/api/query/${id}`)
      .then(() => {
        setQueries(queries.filter(query => query.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='bg-slate-200'>
      <Logout />
      <Link to={`/create`}>Crear</Link>
      <h1 className=''>Queries</h1>

      {queries.map(query => (
        <div key={query.id}>
          <h1>Id: {query.id} </h1>
          <h2>Dificultad: {query.difficulty }</h2>
          <h2>Categoria: {query.category}</h2>
          <p>Pregunta : {query.question} </p>
          <p >{query.correct_answer}</p>
          {query.incorrect_answers.map((answer, index) => (
            <p key={index}>Incorrecta{index+1}: {answer}</p>
          ))}
          <UpdateQuery queryId={query.id} />
          <DeleteQuery queryId={query.id} />  
        </div>
      ))}
          {/* <button className='bg-sky-500
                            border-2 border-black
                            rounded-md
          
          '
            onClick={() => handleEdit(query.id)}>Edit</button>
          <button className='bg-red-500
                            border-2 border-black
                            rounded-md  
                            
                            '
          
          onClick={() => handleDelete(query.id)}>Delete</button> */}
    </div>
  );
}

export default QueryPage;