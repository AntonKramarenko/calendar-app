import React from 'react';
import { CalendarMonth } from '../../components/CalendarMonth';
import { Header } from '../../components/Header';
import './CalendarPage.scss';

export const CalendarPage = () => {
	return (
		<div className='calendarPage'>
			<Header/>
			<CalendarMonth/>
		</div>
	);
};
