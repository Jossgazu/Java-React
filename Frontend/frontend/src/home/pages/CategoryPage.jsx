import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Question } from '../components/Question';
import cienciaImg from '../../assets/ciencia.png';
import deportesImg from '../../assets/deportes.png';
import geografiaImg from '../../assets/geografia.png';
import historiaImg from '../../assets/historia.png';
import tecnologiaImg from '../../assets/tecnologia.png';
import { Navbar } from '../components/Navbar';
// Función para barajar las preguntas de cada categoría y también reducirla al número de 5
const shuffleArray = array => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 5);
};

export const CategoryPage = () => {
    // Leer El parametro de la URL
    const { category } = useParams();

    const images = {
        'Ciencia': cienciaImg,
        'Deportes': deportesImg,
        'Geografía': geografiaImg,
        'Historia': historiaImg,
        'Tecnología': tecnologiaImg
    };
    // const imgCategory = images[category];

		const categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1);
		const imgCategory = images[categoryCapitalized];

    const [queries, setQueries] = useState([]);
    const [indexQuery, setIndexQuery] = useState(0);
    const [activeQuiz, setActiveQuiz] = useState(false);

    useEffect(() => {
        // Hacer la solicitud a la API
        fetch('http://localhost:8080/api/query')
            .then(response => response.json())
            .then(data => {
                const filteredQueries = data.filter(query => query.category === category);
                const newQueries = shuffleArray(filteredQueries);
                setQueries(newQueries);
            });
    }, [category]);

		return (
			<div className='container'>
			<Navbar />
			<div
					className='container flex flex-col items-center justify-center gap-10'
					style={{ height: 'calc(100vh - 5rem)' }}
			>
					{activeQuiz ? (
							<Question
									filteredQuestion={queries[indexQuery]}
									setIndexQuestion={setIndexQuery} // Cambiado aquí
									indexQuestion={indexQuery}
									questionsFiltered={queries}
									setActiveQuiz={setActiveQuiz}
							/>
					) : (
							<>
									<div className='flex flex-col gap-5'>
											<h1 className='text-3xl text-teal-900 text-center font-bold'>
													{category}
						</h1>

						<div className='flex justify-center items-center'>
							<img
								src={imgCategory}
								alt={category}
								className='w-72'
							/>
						</div>
					</div>

					<button
						className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
						onClick={() => setActiveQuiz(true)}
					>
						Iniciar Quiz
					</button>
				</>
			)}
		</div>
		</div>
	);
};
