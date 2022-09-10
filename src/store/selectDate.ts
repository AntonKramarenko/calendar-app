import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState:number = 0;

export const selectDateSlice = createSlice({
	name: 'selectDate',
	initialState,
	reducers: {
		setNextMonth(state){
			const newDate = new Date(state);
			console.log(newDate);
            
			return new Date(newDate.getFullYear(),newDate.getMonth()+1,1).getTime();
		},
		setPrevMonth(state){
			const newDate = new Date(state);
			return new Date(newDate.getFullYear(),newDate.getMonth()-1,1).getTime();
		},
		setSelectDate(state, actions){
			return actions.payload;
		}
	}
});

export const {setNextMonth, setPrevMonth,setSelectDate } = selectDateSlice.actions;
export default selectDateSlice.reducer;