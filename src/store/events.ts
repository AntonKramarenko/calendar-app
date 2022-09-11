import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEvent } from '../types/types';

const initialState:IEvent[] = [];

export const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		setEvents(state, actions){
			return actions.payload;
		},
		addEvent(state, actions){
			state.push(actions.payload);
		},
		removeEvent(state, actions){
			return state.filter(event => event.id !== parseInt(actions.payload));
		},
		updateEvent(state, actions){
			const {id,data, description, time, title } = actions.payload;

			 state.map(event => {
				if(event.id  === parseInt(id)){
					event.data = data;
					event.title = title;
					event.description = description;
					event.time = time;
					return event;
				}else {
					return event;
				}
			});
			
		}
	}
});

export const { addEvent,removeEvent,updateEvent ,setEvents} = eventsSlice.actions;
export default eventsSlice.reducer;