export const dayInString =(miliseconds= new Date().getTime())=>{
	const date = new Date(miliseconds);
	const year = date.getFullYear(); 
	const month = date.getMonth()+1;
	const day = date.getDate();

	const yearString = String(year);
	const monthString  = (month < 10) ? '0' + month : String(month);
	const dayString  = (day < 10) ? '0' + day : String(day);

	return {year:yearString, month: monthString, day:dayString };
};