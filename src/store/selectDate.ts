import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:any = new Date().getTime();

export const selectDateSlice = createSlice({
	name: 'selectDate',
	initialState,
	reducers: {
		setNextMonth(state){
			const newDate = new Date(state);

			return new Date(newDate.getFullYear(),newDate.getMonth()+1).getTime();
			
			
		},
		setPrevMonth(state){
			const newDate = new Date(state);

			return new Date(newDate.getFullYear(),newDate.getMonth()-1).getTime();
				
			
		}
	}
});

export const {setNextMonth, setPrevMonth } = selectDateSlice.actions;
export default selectDateSlice.reducer;