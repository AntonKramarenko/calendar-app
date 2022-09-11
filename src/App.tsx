import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AddEventWindow } from './components/AddEventWindow';
import { ModalWindow } from './components/ModalWindow';
import { CalendarPage } from './pages/CalendarPage';
import { useAppSelector } from './store';

import './styles/main.scss';

function App() {
	const showModalWindow = useAppSelector(state => state.modalWindow);
	
	return (
		<div className='app'>
			{showModalWindow && <ModalWindow><AddEventWindow/></ModalWindow>}
			<Routes>
				<Route  path='/' element={<CalendarPage/>} />
				<Route path=':id'  element={<CalendarPage/>}/>
				<Route path='*' element={ <Navigate to='/'/>}/>
			</Routes>
		</div>
	);
}

export default App;
