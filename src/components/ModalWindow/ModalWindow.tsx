import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { isVisibleModal } from '../../store/modalWindow';
import './ModalWindow.scss';

interface IChildren {
	children : React.ReactNode
}

export const ModalWindow:React.FC<IChildren> = ({children}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();


	const handleClick = (e:React.MouseEvent<HTMLElement>)=> {
		e.preventDefault();
		dispatch(isVisibleModal());
		navigate('/calendar');
	};

	return (
		<div className='modalWindow' onClick={handleClick}>{children}</div>
	);
};
