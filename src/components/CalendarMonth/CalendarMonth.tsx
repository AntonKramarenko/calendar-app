import React, { useEffect, useState } from 'react';
import { createMonthArr } from '../../helpers/createMonthArr';
import { useAppSelector } from '../../store';
import { IEvent } from '../../types/types';
import { CalendarDay } from '../CalendarDay';
import './CalendarMonth.scss';

export const CalendarMonth = () => {
	const [ monthArr, setMonthArr ] = useState([]);
	const [ currentMonthEvent, setCurrentMonthEvent  ] = useState<IEvent[] | undefined>();
	const selectDate = useAppSelector(state => state.selectDate);
	const events = useAppSelector(state => state.events);
	

	useEffect(() => {
		setMonthArr(createMonthArr(selectDate));
		setCurrentMonthEvent(filtredEventsMonth(events));
	}, [ selectDate ]);
    
    
	const dayMiliseconds = () =>{
		const date = new Date();

		const dateObg = {
			year: date.getFullYear(),
			month: date.getMonth(),
			day: date.getDate()
		};
		return new Date(dateObg.year, dateObg.month, dateObg.day).getTime();
	};

	const currentDate = dayMiliseconds();
	


	const filtredEventsMonth  =(events:IEvent[]) =>{
		if(monthArr.length && monthArr[0][0]){
			const firstDay = monthArr[0][0];
			const lastDay = monthArr[monthArr.length-1][6];
			return events.filter(event =>firstDay < event.data && event.data <= lastDay);
		}
		return undefined;
	};

	return (
		<div  className='calendarMonth'>
			<div className='calendarMonth__month'>
				{monthArr.map((weeks:number[], index) => {
					return (
						<ul className='calendarMonth__week' key={index}>
							{weeks.map((day:number) => <CalendarDay item={day} key={day} currentDate={currentDate} events={currentMonthEvent}/> )}
						</ul>
					);})
				}
			</div>
		</div>
	);
};