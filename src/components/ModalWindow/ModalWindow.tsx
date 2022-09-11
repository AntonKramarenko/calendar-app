import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { isVisibleModal } from '../../store/modalWindow';
import './ModalWindow.scss';

export const ModalWindow = ({children}:any) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();


	const handleClick = (e:any)=> {
		e.preventDefault();
		dispatch(isVisibleModal());
		navigate('/');
	};

	return (
		<div className='modalWindow' onClick={handleClick}>{children}</div>
	);
};
