import DatePicker from "react-datepicker"

const DatePick = ({startDate,setStartDate,name}) => {
	return (
		<DatePicker
		selected={startDate}
		onChange={(date) => setStartDate(date, name)}
	/>
	)
}
export default DatePick