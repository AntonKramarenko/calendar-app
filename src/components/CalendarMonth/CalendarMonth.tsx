import React, { useEffect, useState } from 'react';
import { createMonthArr } from '../../helpers/createMonthArr';
import { useAppSelector } from '../../store';
import { CalendarDay } from '../CalendarDay';
import './CalendarMonth.scss';

export const CalendarMonth = () => {
	const [ monthArr, setMonthArr ] = useState<[]>([]);
	const selectDate = useAppSelector(state => state.selectDate);

	useEffect(() => {
		setMonthArr(createMonthArr(selectDate));
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


	return (
		<div  className='calendarMonth'>
			<div className='calendarMonth__month'>
				{monthArr.map((weeks:number[]) => {
					return (
						<ul className='calendarMonth__week'>
							{weeks.map((day:number) => <CalendarDay item={day} key={day} currentDate={currentDate}/> )}
						</ul>
					);})
				}
			</div>
		</div>
	);
};