import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AddEventWindow } from './components/AddEventWindow';
import { ModalWindow } from './components/ModalWindow';
import { CalendarPage } from './pages/CalendarPage';
import { useAppSelector } from './store';

import './styles/main.scss';

const App:React.FC = () => {
	const showModalWindow = useAppSelector(state => state.modalWindow);
	
	return (
		<div className='app'>
			{showModalWindow && <ModalWindow><AddEventWindow/></ModalWindow>}
			<Routes>
				<Route path='calendar' element={<CalendarPage/>}/>
				<Route path='calendar/:id' element={<CalendarPage/>}/>
				<Route path='*' element={ <Navigate to='/calendar'/>}/>
			</Routes>
		</div>
	);
};

export default App;
