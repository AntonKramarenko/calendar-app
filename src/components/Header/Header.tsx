import React from 'react';
import { AddEventButton } from '../ui/AddEventButton';
import { DateChanger } from '../ui/DateChanger';
import { DatePicker } from '../ui/DatePicker';
import './Header.scss';

export const Header = () => {
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
