import React from 'react';
import './CalendarDay.scss';


interface ICalendarDay{
    item: number
}

export const CalendarDay: React.FC<ICalendarDay> = ({item}) => {
	return (
		<li className='calendarDay'>{new Date(item).getDate()}</li>
	);
};
