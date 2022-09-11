export const dayMiliseconds = () =>{
	const date = new Date();
	const dateObg = {
		year: date.getFullYear(),
		month: date.getMonth(),
		day: date.getDate()
	};
	return new Date(dateObg.year, dateObg.month, dateObg.day).getTime();
};