import React, { useEffect } from 'react';
import { CalendarMonth } from '../../components/CalendarMonth';
import { Header } from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../store';
import { setEvents } from '../../store/events';
import { setSelectDate } from '../../store/selectDate';
import './CalendarPage.scss';

interface IData {
	currentDateStorage: string,
	eventStorage: string
}

export const CalendarPage:React.FC = React.memo(() => {	
	const state = useAppSelector(state => state);
	const dispatch = useAppDispatch();

	useEffect(() => {
		try {
			const getData = (): Promise<IData> => {
				return new Promise( function(resolve, reject)  {
					// fetch('URL').then(response => response.json())
					// 	.then(data => resolve(data))
					// 	.catch(error =>reject(error));

					const eventStorage =  localStorage.getItem('calendarEvents');
					const currentDateStorage = localStorage.getItem('calendarCurrentDate');

					eventStorage && currentDateStorage 
						? resolve({eventStorage,currentDateStorage}) 
						: reject(new Error());
				});
			};

			getData().then((data) => {
				dispatch(setSelectDate(JSON.parse(data.currentDateStorage)));
				dispatch(setEvents(JSON.parse(data.eventStorage)));
			}).catch(error => {throw new Error('Save from localstore failed');});
		} catch (error) {
			throw new  Error('Loading eventis is error');
		}
	}, [ dispatch ]);

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