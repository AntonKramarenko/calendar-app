import React from 'react';
import './AddEventButton.scss';
import { IoAdd } from 'react-icons/io5';
import { useAppDispatch } from '../../../store';
import { isVisibleModal } from '../../../store/modalWindow';

export const AddEventButton:React.FC = React.memo(() => {
	const dispatch = useAppDispatch();

	const handleClick = ()=> dispatch(isVisibleModal());

	return <button className='addEventButton' onClick={handleClick}><IoAdd/></button>;
});
