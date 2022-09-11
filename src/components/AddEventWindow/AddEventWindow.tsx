import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { addEvent } from '../../store/events';
import { isVisibleModal } from '../../store/modalWindow';
import './AddEventWindow.scss';

export const AddEventWindow = () => {
	const dispatch = useAppDispatch();
	const { register, handleSubmit, watch, setError, setValue, formState: { errors } } = useForm();

  
	const onSubmit = (data: any) =>{
		const selectDateArr = data.data.split('-');
		const selectDate = new Date(selectDateArr[0], selectDateArr[1]-1, selectDateArr[2]);

		dispatch(addEvent({
			id: new Date().getTime(),
			data: selectDate.getTime(),
			title: data.title,
			description: data.description,
			time: data.time
		}));

		dispatch(isVisibleModal());
	};

	const handleReject = () => {
		dispatch(isVisibleModal());
	};
    
	return (
		<div className='addEventWindow' onClick={e => e.stopPropagation()}>
			<h2 className='addEventWindow__title'>Add new idea item</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='addEventWindow__form'>
				<input  {...register('title', { required: true })} placeholder='Title goes here' className='addEventWindow__input input-title' />
				{errors.title && <span>Title is required</span>}

				<textarea  {...register('description')} placeholder='Description' className='addEventWindow__input input-description' />

				<div className='addEventWindow__timeshtamp'>
					<div className='addEventWindow__date'>
                    date
						<input defaultValue='2022-09-10' {...register('data', { required: true })} type='date' />
						{errors.data && <span>Date is required</span>}
					</div>
					<div className='addEventWindow__time'>
                    time
						<input {...register('time')} type='time' />
					</div>
				</div> 
				<div className='addEventWindow__btns'>
					<button type='submit' > Save</button>
					<button type='reset' onClick={handleReject}>Reject</button>
				</div>
			</form>
		</div>
	);
};
