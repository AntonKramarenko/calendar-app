import React, { useEffect, useMemo, useState } from 'react';
import { EventItem } from '../ui/EventItem';
import { IEvent } from '../../types/types';
import './CalendarDay.scss';

interface ICalendarDay{
    thisDay: number,
    currentDate?: number,
	events: IEvent[] 
}

export const CalendarDay: React.FC<ICalendarDay> = React.memo(({thisDay,currentDate,events}) => {
	const [ dayEvent, setDayEvent ] = useState<IEvent[]>([]);

	const filterEvents = useMemo(() => events.filter(event => event.data === thisDay), [ events,thisDay ]);

	const date = useMemo(() => new Date(thisDay), [ thisDay ]);
	const dayNumber = date.getDate();
	const nameDay = date.toLocaleDateString('en-US', { weekday: 'short' });; 
	
	useEffect(() => {
		events.length ? setDayEvent(filterEvents) : setDayEvent([]);
	}, [ events,filterEvents ]);

	return (
		<li className={currentDate === thisDay ?'calendarDay calendarDay__today' : 'calendarDay'}>
			<div className='calendarDay__info'>
				<span className='calendarDay__nameDay'>{nameDay}</span>
				<span className='calendarDay__day'>{dayNumber}</span>
			</div>
			{dayEvent.length 
				? <ul className='calendarDay__eventList'>
					{dayEvent.map(event => <EventItem key={event.id} event={event}/>)}
				  </ul>
				: null
			}
		</li>
	);
});