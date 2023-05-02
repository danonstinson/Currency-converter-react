import { useEffect, useState } from "react";
import "./style.css";

const Time = () => {
  const [myDate, setMyDate] = useState(new Date());

  const showMyDate = (myDate) =>
    myDate.toLocaleTimeString("pl-pl", { weekday: "long", day: "numeric", month: "long" })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [myDate]);

  return (
    <div
      className="timer"
    >
      Dzisiaj jest {showMyDate(myDate)}
    </div>
  );
};

export default Time;