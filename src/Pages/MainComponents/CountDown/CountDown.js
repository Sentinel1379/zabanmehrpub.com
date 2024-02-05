import { useState } from "react";
import Countdown from "react-countdown";

export default function CountDown1() {
    const Completionist = () => {
        return (<span></span>)
    }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <div className="Special-sale-banner-timer-content">
                    <div className="timer-day">
                        <span>{days}</span>
                        <span>روز</span>
                    </div>
                    <div className="timer-hour">
                        <span>{hours}</span>
                        <span>ساعت</span>
                    </div>
                    <div className="timer-minute">
                        <span>{minutes}</span>
                        <span>دقیقه</span>
                    </div>
                    <div className="timer-second">
                        <span>{seconds}</span>
                        <span>ثانیه</span>
                    </div>
                </div>
            )
        }
    }

    var x = Date.now() + 1000000000
    // console.log(x);

    const [time1 , setTime1] = useState(x)


    return (
        <Countdown date={x} renderer={renderer} zeroPadDays={2} />
    )
}