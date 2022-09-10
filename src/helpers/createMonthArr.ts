export const createMonthArr =(data:number)=>{
	const datesArr = generateDates(data);

	const monthArr  = generateWeeks(datesArr);

	return monthArr;
};

const generateWeeks = (datesArr: number[]) =>{
	const month:any = [];
	let week = [];

	for (let i = 0; i < datesArr.length; i++) {
		if(i > 1 && i% 7 === 0){
			month.push(week);
			week = [];
		}
		week.push(datesArr[i]);
	}

	if(week.length){
		month.push(week);
		week = [];
	}

	;
  
	return validateWeeks(month);
};

const validateWeeks = (monthArr:[]) =>{
	const lastWeek:number[] = monthArr[monthArr.length-1];
	const lastDay = new Date(lastWeek[lastWeek.length-1]);

	const year = lastDay.getFullYear();
	const month = lastDay.getMonth();
	const daysInMonth = new Date(year, month , 0).getDate();


	for (let i = lastWeek.length; i < 7; i++) {
		lastWeek.push(new Date(year,month, daysInMonth+i ).getTime());
	}
    
	return monthArr;
};

const generateDates = (data:number)=>{
	const selectDate = new Date(data);
	const selectYear = selectDate.getFullYear();
	const selectMonth = selectDate.getMonth();

	const daysInMonth = new Date(selectYear, selectMonth , 0).getDate();
	const startMonthFrom = new Date(selectYear, selectMonth,0).getDay();
    
	const monthArr:number[] = [];

	for (let i = 0; i <= daysInMonth + startMonthFrom ; i++) {
		monthArr.push(genedateDate(selectYear, selectMonth,startMonthFrom, i+1));
	}
  
	return monthArr;
};

const genedateDate =(selectYear:number,selectMonth:number, startMonthFrom:number,dayCount:number) =>{
	return new Date(selectYear,selectMonth, dayCount-startMonthFrom ).getTime(); 
};