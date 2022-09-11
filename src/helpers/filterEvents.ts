import { IEvent } from '../types/types';

export const filterEvents = (eventsArr:IEvent[],monthArr:any ) => {
	if(monthArr.length){
		const startMonthDay = monthArr[0][0];
		const lastMonthDay = monthArr[monthArr.length-1][6];
		return eventsArr.filter(event => startMonthDay < event.data && event.data< lastMonthDay );
	}else {
		return eventsArr;
	}
};