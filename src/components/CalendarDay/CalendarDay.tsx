import React from 'react';
import { useAppSelector } from '../../store';
import { IEvent } from '../../types/types';
import './CalendarDay.scss';


interface ICalendarDay{
    item: number,
    currentDate?: number,
	events: IEvent[] | undefined
}

export const CalendarDay: React.FC<ICalendarDay> = ({item,currentDate,events}) => {

	const date = new Date(item);
	const day = date.getDate();

	

	return (
		<li className={currentDate === item ?'calendarDay calendarDay__today' : 'calendarDay'}>
			{day}
		</li>
	);
};
