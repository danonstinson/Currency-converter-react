import "./style.css";

const Time = () => {
  const myDate = new Date();
  const showDate = myDate.toLocaleTimeString("pl-pl", { weekday: "long", day: "numeric", month: "long" })

  return (
    <div
      className="timer"
    >
      Dzisiaj jest {showDate}
    </div>
  );
};

export default Time;