import React, { useEffect, useState } from 'react';
import { createMonthArr } from '../../helpers/createMonthArr';
import { dayMiliseconds } from '../../helpers/dayInMiliseconds';
import { useAppSelector } from '../../store';
import { IEvent } from '../../types/types';
import { CalendarDay } from '../CalendarDay';
import './CalendarMonth.scss';

export const CalendarMonth = () => {

	const selectDate = useAppSelector(state => state.selectDate);
	const events = useAppSelector(state => state.events);
	const [ monthArr, setMonthArr ] = useState([]);
	const [ currentMonthEvent, setCurrentMonthEvent  ] = useState<IEvent[]>([]);
	const currentDate = dayMiliseconds();

	useEffect(() => {
		setCurrentMonthEvent(filterEvents(events));
	}, [ monthArr,events ]);
	
	useEffect(() => {
		setMonthArr(createMonthArr(selectDate));
	}, [ selectDate ]);


	const filterEvents =(eventsArr:IEvent[]) =>{
		if(monthArr.length){
			const startMonthDay = monthArr[0][0];
			const lastMonthDay = monthArr[monthArr.length-1][6];
			return eventsArr.filter(event => startMonthDay < event.data && event.data< lastMonthDay );
		}else {
			return eventsArr;
		}
	};
	

	return (
		<div  className='calendarMonth'>
			<div className='calendarMonth__month'>
				{monthArr.map((weeks:number[], index) => {
					return (
						<ul className='calendarMonth__week' key={index}>
							{weeks.map((day:number) => <CalendarDay thisDay={day} key={day} currentDate={currentDate} events={currentMonthEvent}/> )}
						</ul>
					);})
				}
			</div>
		</div>
	);
};