import React, { useState } from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setSelectDate } from '../../../store/selectDate';
import './DatePicker.scss';

const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December' ];
const years = Array(10).fill(new Date().getFullYear()).map((item,index) => item + index);;

export const DatePicker:React.FC = React.memo(() => {
	const [ isVisible,setVisible ] = useState(false);
	const { register, watch, handleSubmit} = useForm();
	const selectDate = useAppSelector(state => state.selectDate);
	const dispatch = useAppDispatch();
	const selectMonth = new Date(selectDate).getMonth();

	const onSubmit = (data:any) => {
		const indexOfMonth = monthNames.indexOf(data.month);
		const dateTime = new Date(data.year, indexOfMonth).getTime();
		dispatch(setSelectDate(dateTime));
		setVisible(false);
	};


	return (
		<div className='datePicker'>
			<div className='datePicker__header' onClick={() => setVisible(!isVisible)}>
				<IoCalendarClearOutline/>
			</div>
			{isVisible && <div className='datePicker__body'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<select {...register('month') } name='month' className='datePicker__select' defaultValue={monthNames[selectMonth]}>
						{monthNames.map(month=> <option key={month} value={month}>{month}</option>)}
					</select>
					<select {...register('year') } name='year' className='datePicker__select' >
						{years.map(year => 	<option key={year} value={year}>{year}</option>)}
					</select>
					<button type='submit' className='datePicker__submit'>Search</button>
				</form>
			</div>}
		</div>
	);
});
