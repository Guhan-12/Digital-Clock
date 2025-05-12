import { useEffect, useState } from "react";

function Digital() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const newIntervalId = setInterval(() => {
            setTime(new Date)();
        }, 1000);

        return () => {
            clearInterval(newIntervalId);
        }
    }, [])

    const formatTime = () => {
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let meridiam = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(min)}:${sec} ${padZero(meridiam)}`;
    }

    const padZero = (number) => {
        return (number < 10 ? "0" : "") + number;
    }

    return(
    <div className="clock-container">
        <span>{formatTime()}</span>
    </div>);
}
export default Digital