import React from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setNextMonth, setPrevMonth } from '../../../store/selectDate';
import './DateChanger.scss';

export const DateChanger:React.FC = React.memo(() => {
	const selectDate = useAppSelector(state => state.selectDate);
	const dispatch = useAppDispatch();

	const date = new Date(selectDate);
	const monthFullName = date.toLocaleString('en-US', { month: 'long' });
	const year = date.getFullYear();

	const monthPrev = () => dispatch(setPrevMonth());
	const monthNext = () => dispatch(setNextMonth());

	return (
		<div className='dateChanger'>
			<IoChevronBackOutline onClick={monthPrev}/>
			{monthFullName} {year}
			<IoChevronForwardOutline onClick={monthNext}/>
		</div>
	);
});