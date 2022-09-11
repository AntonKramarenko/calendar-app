import { createSlice } from '@reduxjs/toolkit';

const initialState:number = new Date().getTime();

export const selectDateSlice = createSlice({
	name: 'selectDate',
	initialState,
	reducers: {
		setNextMonth(state){
			const newDate = new Date(state);
			return new Date(newDate.getFullYear(),newDate.getMonth()+1,1).getTime();
		},
		setPrevMonth(state){
			const newDate = new Date(state);
			return new Date(newDate.getFullYear(),newDate.getMonth()-1,1).getTime();
		},
		setSelectDate(state, actions){
			return state = actions.payload;
		}
	}
});

export const {setNextMonth, setPrevMonth,setSelectDate } = selectDateSlice.actions;
export default selectDateSlice.reducer;