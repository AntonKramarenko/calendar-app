import React from 'react';
import { useAppSelector } from '../../store';
import './CalendarDay.scss';


interface ICalendarDay{
    item: number,
    currentDate?: number
}

export const CalendarDay: React.FC<ICalendarDay> = ({item,currentDate}) => {
	

	return (
		<li className={currentDate === item ?'calendarDay calendarDay__today' : 'calendarDay'}>
			{new Date(item).getDate()}
		</li>
	);
};
