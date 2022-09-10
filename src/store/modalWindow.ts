import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:any = false;

export const modalwindowSlice = createSlice({
	name: 'Modalwindow',
	initialState,
	reducers: {
		isVisibleModal(state){
			return !state;
		}
	}
});

export const { isVisibleModal } = modalwindowSlice.actions;
export default modalwindowSlice.reducer;