import React, { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../store';
import { createMonthArr } from '../../helpers/createMonthArr';
import { dayMiliseconds } from '../../helpers/dayInMiliseconds';
import { CalendarDay } from '../CalendarDay';
import { IEvent } from '../../types/types';
import './CalendarMonth.scss';
import { filterEvents } from '../../helpers/filterEvents';

export const CalendarMonth:React.FC = React.memo(() => {
	const [ monthArr, setMonthArr ] = useState([]);
	const [ currentMonthEvent, setCurrentMonthEvent  ] = useState<IEvent[]>([]);
	const selectDate = useAppSelector(state => state.selectDate);
	const events = useAppSelector(state => state.events);
	const currentDate = dayMiliseconds();
	
	const createMonth = useMemo(() => createMonthArr(selectDate), [ selectDate ]);
	const filterEventsArr = useMemo(() => filterEvents(events,monthArr ), [ events,monthArr ]);

	useEffect(() => {
		setCurrentMonthEvent(filterEventsArr);
	}, [ monthArr,events,filterEventsArr ]);
	
	useEffect(() => {
		setMonthArr(createMonth);
	}, [ selectDate ,createMonth ]);

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
});