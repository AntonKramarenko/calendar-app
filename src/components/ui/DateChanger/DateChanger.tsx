import React, { useEffect, useState } from 'react';
import './DateChanger.scss';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setNextMonth, setPrevMonth } from '../../../store/selectDate';

export const DateChanger = () => {
	
	const selectDate = useAppSelector(state => state.selectDate);
	const dispatch = useAppDispatch();

	const date = new Date(selectDate);
	const monthFullName = date.toLocaleString('en-US', { month: 'long' });
	const year = date.getFullYear();

	const monthPrev = () => {
		dispatch(setPrevMonth());
	};
	const monthNext = () => {        
		dispatch(setNextMonth());
	};

	return (
		<div className='dateChanger'>
			<IoChevronBackOutline onClick={monthPrev}/>
			{monthFullName} {year}
			<IoChevronForwardOutline onClick={monthNext}/>
		</div>
	);
};


// useEffect(() => {
// 	console.log(new Date(selectDate));
	
// 	// setDate(new Date (selectDate));
// }, [ selectDate ]);

