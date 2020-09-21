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
    let stringMinutes = `${minutes}`;
    
    // let hourconverter = hours === 13 ? hours = 1
    //     : hours === 14 ? hours = 2
    //     : hours === 15 ? hours = 3
    //     : hours === 16 ? hours = 4
    //     : hours === 17 ? hours = 5
    //     : hours === 18 ? hours = 6
    //     : hours === 19 ? hours = 7
    //     : hours === 20 ? hours = 8
    //     : hours === 21 ? hours = 9
    //     : hours === 22 ? hours = 10
    //     : hours === 23 ? hours = 11
    //     : hours === 00 ? hours = 12
    //     : hours;
    
    
    if (minutes < 10) {
        stringMinutes = `0${minutes}`;
    }

    // for daily return
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let AMPM = hours < 12 ? 'AM' : 'PM';

    if (timeline === 'hourly') {
        return `${hours}:${stringMinutes} ${AMPM}`;
    } else if (timeline === 'daily') {
        return `${month + 1}/${day}/${year}`;
    } else {
        'Date format not specified';
    }
};