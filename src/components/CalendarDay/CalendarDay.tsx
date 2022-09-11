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

	const filterEvents = useMemo(() => events.filter(event => event.data === thisDay), [ events ]);

	const date = useMemo(() => new Date(thisDay), [ thisDay ]);
	const daynumber = date.getDate();
	const nameDay = date.toLocaleDateString('en-US', { weekday: 'long' });; 
	
	useEffect(() => {
		events.length ? setDayEvent(filterEvents) : setDayEvent([]);
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
});