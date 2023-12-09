import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../Paginas/Logout';
import HomePages from '../../Paginas/HomePages';

export const Navbar = () => {
	return (
		<div>
		<header className='bg-gray-900 py-5 flex justify-center'>
			<Link to='/home'>
				<h1 className='text-white text-2xl font-bold hover:scale-110 transition-all duration-500'>
					SISTEMA DE ENSEÑANZA DIDACTICA
				</h1>
			</Link>
			<div className=''>

			</div>
		</header>
		<div className='flex border-2 border-black w-full bg-slate-500'>	
			<HomePages/>
		</div>
		</div>
	);
};
