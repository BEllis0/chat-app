/*
    Date Converter Function
    Arguments: date object, and a timeline value of hourly or daily
    Hourly return example: 3:15 AM
    Daily return example: 5/23/20
*/

export default function dateConverter(dateObj, timeline) {
    let date = new Date(dateObj);
    
    // for hourly return
    let hours = date.getHours();
    let minutes = date.getMinutes();

    
    if (minutes < 10) {
        minutes === `0${minutes}`;
    }

    // for daily return
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let AMPM = hours < 12 ? 'AM' : 'PM';

    if (timeline === 'hourly') {
        return `${hours}:${minutes} ${AMPM}`;
    } else if (timeline === 'daily') {
        return `${month + 1}/${day}/${year}`;
    } else {
        'Date format not specified';
    }
};