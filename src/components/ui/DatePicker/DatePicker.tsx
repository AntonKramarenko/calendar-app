import React, { useState } from 'react';
import './DatePicker.scss';
import { IoCalendarClearOutline } from 'react-icons/io5';

export const DatePicker = () => {
	const [ isVisible,setVisible ] = useState(false);
	return (
		<div className='datePicker'>
			<div className='datePicker__header' onClick={() => setVisible(!isVisible)}>
				<IoCalendarClearOutline/>
			</div>

			{isVisible && <div className='datePicker__body'>
				<select name='day' id='day'>
					<option value='0'>1</option>
					<option value='1'>2</option>
				</select>

				<select name='year' id='year'>
					<option value='0'>year 1</option>
					<option value='1'>year 2</option>
				</select>
			</div>}
            
         
		</div>
	);
};
