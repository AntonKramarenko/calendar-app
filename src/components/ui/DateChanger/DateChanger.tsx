import React from 'react';
import './DateChanger.scss';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

export const DateChanger = () => {


	const monthPrev = () => {
		console.log(-1);
    
	};
	const monthNext = () => {
		console.log(1);
	};

	return (
		<div className='dateChanger'>
			<IoChevronBackOutline onClick={monthPrev}/>
			September 2022
			<IoChevronForwardOutline onClick={monthNext}/>
		</div>
	);
};
