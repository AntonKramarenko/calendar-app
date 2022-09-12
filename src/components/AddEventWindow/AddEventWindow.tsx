import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoTrashOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../store';
import { addEvent, removeEvent, updateEvent } from '../../store/events';
import { isVisibleModal } from '../../store/modalWindow';
import { dayInString } from '../../helpers/dayInString';
import { IEvent } from '../../types/types';
import './AddEventWindow.scss';


export const AddEventWindow: React.FC = React.memo(() => {
	const [ eventInfo, setInfo ] = useState<IEvent>();
	const dispatch = useAppDispatch();
	const { register, handleSubmit, setError, setValue, formState: { errors } } = useForm();
	const {pathname} = useLocation();
	const navigate = useNavigate();
	const events = useAppSelector(state => state.events);

	const id = pathname.replace('/calendar/', '').replace('/calendar', '');
	const curentDate = dayInString(new Date().getTime());
	const createAt = new Date(parseInt(id)).toLocaleString();

	useEffect(() => {
		setValue('data', `${ curentDate.year }-${ curentDate.month }-${ curentDate.day }`);
		
		if(id.length){
			setInfo(events.filter(event => event.id === parseInt(id))[0]);
		}
	}, [ curentDate.day, curentDate.month, curentDate.year, events, id, setValue ]);

	useEffect(() => {
		if(eventInfo){
			const date = dayInString(eventInfo.data);
			setValue('title', eventInfo.title);
			setValue('description', eventInfo.description);
			setValue('data', `${ date.year }-${ date.month }-${ date.day }`);
		}
	}, [ eventInfo, setValue ]);
	
	const onSubmit = (data: any) =>{
		const selectDateArr = data.data.split('-');
		const selectDate = new Date(selectDateArr[0], selectDateArr[1]-1, selectDateArr[2]);
		const currentDate = new Date();


		if(selectDate.getTime() < new Date(currentDate.getFullYear(), currentDate.getMonth()).getTime()){
			return setError('data', { type: 'custom', message: 'The selected date is in the past' });
		}

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
			{id.length>0 && createAt && <h5 className='addEventWindow__subtitle'>Created at: {createAt}</h5>}

			<form onSubmit={handleSubmit(onSubmit)} className='addEventWindow__form'>
				<input  {...register('title', { required: 'Title is required' })} placeholder='Title goes here' className='addEventWindow__input input-title' />
				{errors.title?.message && <span className='addEventWindow__errorMessage'>{`${ errors.title?.message }`}</span>}

				<textarea  {...register('description')} placeholder='Description' className='addEventWindow__input input-description' />

				<div className='addEventWindow__timeshtamp'>
					<div className='addEventWindow__date'>
						<span>Date</span>
						<input {...register('data', { required: 'Date is requared' })} type='date' />
						{errors.data?.message && <span className='addEventWindow__errorMessage'>{`${ errors.data?.message }`}</span>}
					</div>
					<div className='addEventWindow__time'>
						<span>Time</span>
						<input {...register('time')} type='time' />
					</div>
				</div> 
				<div className='addEventWindow__btns'>
					{id.length>0 && <button type='reset' className='addEventWindow__btns-delete' onClick={handleReject}> <IoTrashOutline/> </button>}
					<button type='submit' className='addEventWindow__btns-submit'> {id.length ? 'Update' : 'Save'}</button>
				</div>
			</form>
		</div>
	);
});
