import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { dayMiliseconds } from '../../helpers/dayInMiliseconds';
import { dayInString } from '../../helpers/dayInString';
import { useAppDispatch, useAppSelector } from '../../store';
import { addEvent, removeEvent, updateEvent } from '../../store/events';
import { isVisibleModal } from '../../store/modalWindow';
import { IEvent } from '../../types/types';
import './AddEventWindow.scss';

export const AddEventWindow = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const events = useAppSelector(state => state.events);
	const [ eventInfo, setInfo ] = useState<IEvent>();
	const { register, handleSubmit, watch, setError, setValue, formState: { errors } } = useForm();
	const {pathname} = useLocation();
	const id = pathname.replace('/calendar/', '').replace('/calendar', '');
	const curentDate = dayInString(new Date().getTime());
	const createAt = new Date(parseInt(id)).toLocaleString();

	

	useEffect(() => {
		setValue('data', `${ curentDate.year }-${ curentDate.month }-${ curentDate.day }`);
		
		if(id.length){
			setInfo(events.filter(event => event.id === parseInt(id))[0]);
		}
	}, [ ]);

	useEffect(() => {
		if(eventInfo){
			const date = dayInString(eventInfo.data);
			setValue('title', eventInfo.title);
			setValue('description', eventInfo.description);
			setValue('data', `${ date.year }-${ date.month }-${ date.day }`);
		}
	}, [ eventInfo ]);
	
	const onSubmit = (data: any) =>{
		const selectDateArr = data.data.split('-');
		const selectDate = new Date(selectDateArr[0], selectDateArr[1]-1, selectDateArr[2]);

		if(id.length){
			dispatch(updateEvent({
				id: id,
				data: selectDate.getTime(),
				title: data.title,
				description: data.description,
				time: data.time
			}));

		}else{
			dispatch(addEvent({
				id: new Date().getTime(),
				data: selectDate.getTime(),
				title: data.title,
				description: data.description,
				time: data.time
			}));
		}

		dispatch(isVisibleModal());
		navigate('/calendar');
	};

	const handleReject = () => {
		if(id.length){
			dispatch(removeEvent(id));
		}
		dispatch(isVisibleModal());
		navigate('/calendar');
		
	};
    
	return (
		<div className='addEventWindow' onClick={e => e.stopPropagation()}>
			<h2 className='addEventWindow__title'>{id.length ? 'Edit idea item'  :  'Add new idea item'}</h2>
			{id.length && createAt && <h5 className='addEventWindow__subtitle'>Created at: {createAt}</h5>}

			<form onSubmit={handleSubmit(onSubmit)} className='addEventWindow__form'>
				<input  {...register('title', { required: true })} placeholder='Title goes here' className='addEventWindow__input input-title' />
				{errors.title && <span>Title is required</span>}

				<textarea  {...register('description')} placeholder='Description' className='addEventWindow__input input-description' />

				<div className='addEventWindow__timeshtamp'>
					<div className='addEventWindow__date'>
                    date
						<input {...register('data', { required: true })} type='date' />
						{errors.data && <span>Date is required</span>}
					</div>
					<div className='addEventWindow__time'>
                    time
						<input {...register('time')} type='time' />
					</div>
				</div> 
				<div className='addEventWindow__btns'>
					<button type='submit' > {id.length ? 'Update' : 'Save'}</button>
					<button type='reset' onClick={handleReject}>{id.length ? 'Delete' : 'Reject'}</button>
				</div>
			</form>
		</div>
	);
};
