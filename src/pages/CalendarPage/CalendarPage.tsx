import React, { useEffect } from 'react';
import { CalendarMonth } from '../../components/CalendarMonth';
import { Header } from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../store';
import { setEvents } from '../../store/events';
import { setSelectDate } from '../../store/selectDate';

import './CalendarPage.scss';

export const CalendarPage = React.memo(() => {	
	const state = useAppSelector(state => state);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const eventStorage = localStorage.getItem('calendarEvents');
		const currentDateStorage = localStorage.getItem('calendarCurrentDate');

		if(eventStorage && currentDateStorage){
			dispatch(setSelectDate(JSON.parse(currentDateStorage)));
			dispatch(setEvents(JSON.parse(eventStorage)));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('calendarEvents', JSON.stringify(state.events));
		localStorage.setItem('calendarCurrentDate', JSON.stringify(state.selectDate));
	}, [ state.events, state.selectDate ]);
	
	return (
		<div className='calendarPage'>
			<Header/>
			<CalendarMonth/>
		</div>
	);
});
