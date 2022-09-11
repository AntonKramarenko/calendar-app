import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { setSelectDate } from '../../store/selectDate';
import { AddEventButton } from '../ui/AddEventButton';
import { DateChanger } from '../ui/DateChanger';
import { DatePicker } from '../ui/DatePicker';
import './Header.scss';

export const Header = () => {
	const dispatch = useAppDispatch();

	const date = new Date();

	useEffect(() => {
		dispatch(setSelectDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()));
	}, []);
	return (
		<div className='header'>
			<AddEventButton/>
			<div className='header__dateSelect'>
				<DateChanger/>
				<DatePicker/>
			</div>
		</div>
	);
};
