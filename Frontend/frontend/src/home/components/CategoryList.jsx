import React, { useEffect, useState } from 'react';
import { CategoryCard } from './CategoryCard';
import { url } from '../../url';

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Hacer la solicitud a la API
        fetch(url+'/api/query')
            .then(response => response.json())
            .then(data => {
                const uniqueCategories = [...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    return (
        <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
            {categories.map((category, index) => (
                <CategoryCard
                    key={index}
                    category={category}
                    src={`/src/assets/${category.toLowerCase()}.png`}
                    alt={`Categoría ${category}`}
                    gradientColor='from-purple-500 to-pink-500' // Ajustar según corresponda
                />
            ))}
        </div>
    );
};

// import { Link } from 'react-router-dom';
// import { imgs, categories } from '../data';
// import { CategoryCard } from './CategoryCard';

// const [
// 	imgCiencia,
// 	imgDeportes,
// 	imgGeografia,
// 	imgHistoria,
// 	imgTecnologia,
// ] = imgs;

// export const CategoryList = () => {
// 	return (
// 		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
// 			{}
// 			<CategoryCard
// 				category={categories.ciencia}
// 				src={imgCiencia}
// 				alt={`Categoría ${categories.ciencia}`}
// 				gradientColor=' from-purple-500 to-pink-500'
// 			/>
// 			{}
// 			<CategoryCard
// 				category={categories.deportes}
// 				src={imgDeportes}
// 				alt={`Categoría ${categories.deportes}`}
// 				gradientColor='from-lime-400 to-teal-700'
// 			/>
// 			<CategoryCard
// 				category={categories.geografia}
// 				src={imgGeografia}
// 				alt={`Categoría ${categories.geografia}`}
// 				gradientColor='from-cyan-200 to-lime-200'
// 			/>
// 			<CategoryCard
// 				category={categories.historia}
// 				src={imgHistoria}
// 				alt={`Categoría ${categories.historia}`}
// 				gradientColor='from-sky-300 to-indigo-900'
// 			/>
// 			<CategoryCard
// 				category={categories.tecnologia}
// 				src={imgTecnologia}
// 				alt={`Categoría ${categories.tecnologia}`}
// 				gradientColor='from-violet-900 to-rose-500 '
// 			/>
// 		</div>
// 	);
// };
