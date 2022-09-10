import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Calendar } from './pages/Calendar';
import './styles/main.scss';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Calendar/>} />
				<Route path='/:id' element={<div>modal</div>} />
				<Route path='*' element={ <Navigate to='/'/>}/>
			</Routes>
		</div>
	);
}

export default App;
