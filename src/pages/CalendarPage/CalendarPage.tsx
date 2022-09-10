import React, { useEffect } from 'react';
import { CalendarMonth } from '../../components/CalendarMonth';
import { Header } from '../../components/Header';
import { useAppDispatch } from '../../store';
import { setSelectDate } from '../../store/selectDate';
import './CalendarPage.scss';

export const CalendarPage = () => {
	const dispatch = useAppDispatch();

	const date = new Date();

	useEffect(() => {
		dispatch(setSelectDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()));
	}, []);
	
	return (
		<div className='calendarPage'>
			<Header/>
			<CalendarMonth/>
		</div>
	);
};
