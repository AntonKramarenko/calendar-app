import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEvent } from '../types/types';

const initialState:IEvent[] = [];

export const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		addEvent(state, actions){
			state.push(actions.payload);
		}
	}
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;