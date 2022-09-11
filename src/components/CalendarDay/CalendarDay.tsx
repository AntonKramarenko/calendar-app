import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';
import { IEvent } from '../../types/types';
import { EventItem } from '../ui/EventItem';
import './CalendarDay.scss';


interface ICalendarDay{
    thisDay: number,
    currentDate?: number,
	events: IEvent[] 
}

export const CalendarDay: React.FC<ICalendarDay> = ({thisDay,currentDate,events}) => {
	const [ dayEvent, setDayEvent ] = useState<IEvent[]>([]);
	const date = new Date(thisDay);
	const daynumber = date.getDate();
	const nameDay = date.toLocaleDateString('en-US', { weekday: 'long' });; 
	
	useEffect(() => {
		if( events.length){
			setDayEvent(events.filter(event => event.data === thisDay));
		}else{
			setDayEvent([]);
		}
	}, [ events ]);

	return (
		<li className={currentDate === thisDay ?'calendarDay calendarDay__today' : 'calendarDay'}>
			<div className='calendarDay__info'>
				<span className='calendarDay__nameDay'>{nameDay}</span>
				<span className='calendarDay__day'>{daynumber}</span>
			</div>
			{dayEvent.length 
				? <ul className='calendarDay__eventList'>
					{dayEvent.map(event => <EventItem key={event.id} event={event}/>)}
				  </ul>
				: null
			}

		</li>
	);
};
