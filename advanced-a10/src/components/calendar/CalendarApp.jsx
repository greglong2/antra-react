import { useState } from "react";

function CalendarApp() {

    /**
     * @typedef {Object} Date
     * @property {number} day
     * @property {number} month
     * @property {number} year
     */

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [selectedDate, setSelectedDate] = useState({});
    const [currentDate, setCurrentDate] = useState(new Date());
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

    /**
     * @param {number} day 
     */
    const selectDateHandler = (day) => {
        setSelectedDate({ day, year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 });
    }

    /**
     * @param {string} type 
     */
    const changeMonthHandler = (type) => {
        setSelectedDate({});
        if (type === 'prev') {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        } else {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        }
    }

    const getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month - 1, 1).getDay();
    }

    const getLastDayOfMonth = (year, month) => {
        return new Date(year, month, 0).getDay();
    }

    const getMonthDays = (year, month) => {
        const days = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const lastDay = getLastDayOfMonth(year, month);
        const daysArray = [];

        for (let i = 0; i < firstDay; i++) {
            daysArray.push(null);
        }

        for (let i = 1; i <= days; i++) {
            daysArray.push(i);
        }

        for (let i = 0; i < 6 - lastDay; i++) {
            daysArray.push(null);
        }

        return daysArray;
    }

    return (
        <div className="calendar-container">
            <span className="calendar__date-pagination">
                <span className="calendar__date-pagination-item" id="calendar__date-prev-btn" onClick={() => changeMonthHandler('prev')}>
                    &lt; {months[prevMonth.getMonth()]}
                </span>
                <span className="calendar__date-pagination-item" id="calendar__date-current">
                    {months[currentDate.getMonth()]}
                </span>
                <span className="calendar__date-pagination-item" id="calendar__date-next-btn" onClick={() => changeMonthHandler('next')}>
                    {months[nextMonth.getMonth()]} &gt;
                </span>
                <span className="calendar__date-pagination-item" id="calendar__date-full-year">
                    Full year {currentDate.getFullYear()}
                </span>
            </span>
            <span className="calendar__title">
                <h2>
                    Calendar for {months[currentDate.getMonth()] + " " + currentDate.getFullYear()} (United States)
                </h2>
            </span>
            <div className="calendar__box">
                <span className="calendar__current-month">
                    {months[currentDate.getMonth()]}
                </span>
                <span className="calendar__day-names">
                    {days.map((day, index) => (
                        <span key={index}>{day}</span>
                    ))}
                </span>
                <span className="calendar__dates">
                    {getMonthDays(currentDate.getFullYear(), currentDate.getMonth() + 1).map((day, index) => (
                        day === selectedDate.day ?
                            <span className="calendar__date-item" id="calendar__date-item-selected" key={index} onClick={() => selectDateHandler(day)}>{day}</span> :
                            <span className="calendar__date-item" key={index} onClick={() => selectDateHandler(day)}>{day}</span>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default CalendarApp;