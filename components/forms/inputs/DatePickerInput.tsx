import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerInput: React.FC<{ onDateChange: (date: Date | null) => void }> = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => {
                setStartDate(date);
                onDateChange(date);
            }}
            dateFormat="MMMM d, yyyy"
        />
    );
};

export default DatePickerInput;

