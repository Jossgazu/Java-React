import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../url';

function CreateQuery() {
  const [newQuery, setNewQuery] = useState({
    difficulty: '',
    question: '',
    category: '',
    correct_answer: '',
    incorrect_answers: ['', '', '']
  });

  const handleCreate = () => {
    axios.post(url+'/api/query', newQuery)
      .then(response => {
        setNewQuery({
          difficulty: '',
          question: '',
          category: '',
          correct_answer: '',
          incorrect_answers: ['', '', '']
        });
        alert('Consulta creada con éxito');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name.includes('incorrect_answers')) {
      const updatedIncorrectAnswers = [...newQuery.incorrect_answers];
      updatedIncorrectAnswers[index] = value;
      setNewQuery({ ...newQuery, incorrect_answers: updatedIncorrectAnswers });
    } else {
      setNewQuery({ ...newQuery, [name]: value });
    }
  };

  return (
    <div className='bg-blue-500
                    w-full
                    h-full  
                    flex
                    justify-center

                    ' >
      <h2>Crear nueva consulta</h2>
      <form onSubmit={e => { e.preventDefault(); handleCreate(); }}>
        <input
          className='border-2 border-black
                      rounded-md
                      p-12
                      
                      '    
          type="text"
          name="difficulty"
          placeholder="Dificultad"
          value={newQuery.difficulty}
          onChange={handleInputChange}
        />
        <input
        className='border-2 border-black
        rounded-md
        p-12'
          type="text"
          name="question"
          placeholder="Pregunta"
          value={newQuery.question}
          onChange={handleInputChange}
        />
        <input
        className='border-2 border-black
        rounded-md
        p-12
        
        '    
          type="text"
          name="category"
          placeholder="Categoría"
          value={newQuery.category}
          onChange={handleInputChange}
        />
        <input
        className='border-2 border-black
        rounded-md
        p-12
        
        '    
          type="text"
          name="correct_answer"
          placeholder="Respuesta correcta"
          value={newQuery.correct_answer}
          onChange={handleInputChange}
        />
        {newQuery.incorrect_answers.map((incorrect_answer, index) => (
          <input
          className='border-2 border-black
                      rounded-md
                      p-12
                      
                      '    
            key={index}
            type="text"
            name={`incorrect_answers${index}`}
            placeholder={`Respuesta incorrecta ${index + 1}`}
            value={incorrect_answer}
            onChange={e => handleInputChange(e, index)}
          />
        ))}
        <button formMethod='POST' type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CreateQuery;