import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CalendarPage } from './pages/CalendarPage';

import './styles/main.scss';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<CalendarPage/>} />
				<Route path='/:id' element={<div>modal</div>} />
				<Route path='*' element={ <Navigate to='/'/>}/>
			</Routes>
		</div>
	);
}

export default App;
