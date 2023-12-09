import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../url';

export function UpdateQuery({ queryId }) { // Recibe queryId como prop
  const [updatedQuery, setUpdatedQuery] = useState({
    difficulty: '',
    question: '',
    category: '',
    correct_answer: '',
    incorrect_answers: ['', '', '']
  });

  const handleUpdate = () => {
      axios.patch(url+`/api/query/${queryId}`, updatedQuery)
        .then(response => {
          alert('Consulta actualizada con éxito');
        })
        .catch(error => {
          console.error(error);
        });
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name.includes('incorrect_answers')) {
      const updatedIncorrectAnswers = [...updatedQuery.incorrect_answers];
      updatedIncorrectAnswers[index] = value;
      setUpdatedQuery({ ...updatedQuery, incorrect_answers: updatedIncorrectAnswers });
    } else {
      setUpdatedQuery({ ...updatedQuery, [name]: value });
    }
  };

  const fetchQuery = () => {
    axios.get(`/api/query/${queryId}`)
      .then(response => {
        setUpdatedQuery(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (queryId) {
      fetchQuery();
    }
  }, [queryId]);

  return (
    <div>
      <h2>Actualizar consulta</h2>
      <form onSubmit={e => { e.preventDefault(); handleUpdate(); }}>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificultad"
          value={updatedQuery.difficulty}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="question"
          placeholder="Pregunta"
          value={updatedQuery.question}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={updatedQuery.category}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="correct_answer"
          placeholder="Respuesta correcta"
          value={updatedQuery.correct_answer}
          onChange={handleInputChange}
        />
        {updatedQuery.incorrect_answers && updatedQuery.incorrect_answers.map((incorrect_answer, index) => (
          <input
            key={index}
            type="text"
            name={`incorrect_answers${index}`}
            placeholder={`Respuesta incorrecta ${index + 1}`}
            value={incorrect_answer}
            onChange={e => handleInputChange(e, index)}
          />
        ))}
        <button className='bg-blue-500 border-2 border-black rounded-lg' formMethod='UPDATE' type="submit">Actualizar</button>
      </form>
    </div>
  );
}