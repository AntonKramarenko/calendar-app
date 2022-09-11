import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { isVisibleModal } from '../../../store/modalWindow';
import { IEvent } from '../../../types/types';
import './EventItem.scss';

interface IEventItem {
    event: IEvent
}

export const EventItem:React.FC<IEventItem> = React.memo(({event}) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const clickHandler = () =>{
		navigate(`/calendar/${ event.id }`);
		dispatch(isVisibleModal());
	};

	return <li className='eventItem' onClick={clickHandler}>{event.title}</li>;
});
