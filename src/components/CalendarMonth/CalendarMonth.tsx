import React, { useEffect, useState } from 'react';
import { createMonthArr } from '../../helpers/createMonthArr';
import { useAppSelector } from '../../store';
import { CalendarDay } from '../CalendarDay';
import './CalendarMonth.scss';

export const CalendarMonth = () => {
	const [ monthArr, setMonthArr ] = useState<number[]>([]);

	const selectDate = useAppSelector(state => state.selectDate);

	useEffect(() => {
		setMonthArr(createMonthArr(selectDate));
	}, [ selectDate ]);
    

	console.log(monthArr);
    

    
	return (
		<div  className='calendarMonth'>
			<ul className='calendarMonth__month'>
				{/* {monthArr.map((item:number) => <CalendarDay item={item} key={item}/> )} */}
			</ul>
		</div>
	);
};
