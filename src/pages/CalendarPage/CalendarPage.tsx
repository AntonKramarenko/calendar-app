import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarMonth } from '../../components/CalendarMonth';
import { Header } from '../../components/Header';

import './CalendarPage.scss';

export const CalendarPage = React.memo(() => {	
	return (
		<div className='calendarPage'>
			<Header/>
			<CalendarMonth/>
		</div>
	);
});
