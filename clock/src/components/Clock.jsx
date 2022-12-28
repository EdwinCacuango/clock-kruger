import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [hourStyle, setHourStyle] = useState();
  const [minuteStyle, setMinuteStyle] = useState();
  const [secondStyle, setSecondStyle] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      let day = new Date();
      let hours = day.getHours() * 30;
      let minutes = day.getMinutes() * 6;
      let seconds = day.getSeconds() * 6;

      setHourStyle(hours + minutes / 12);
      setMinuteStyle(minutes);
      setSecondStyle(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div
        className="hand hour"
        style={{ transform: `rotateZ(${hourStyle}deg)` }}
        data-hour-hand
      ></div>
      <div
        className="hand minute"
        style={{ transform: `rotateZ(${minuteStyle}deg)` }}
      ></div>
      <div
        className="hand second"
        style={{ transform: `rotateZ(${secondStyle}deg)` }}
      ></div>
      <div className="number number1">
        <span>1</span>
      </div>
      <div className="number number2">
        <span>2</span>
      </div>
      <div className="number number3">
        <span>3</span>
      </div>
      <div className="number number4">
        <span>4</span>
      </div>
      <div className="number number5">
        <span>5</span>
      </div>
      <div className="number number6">
        <span>6</span>
      </div>
      <div className="number number7">
        <span>7</span>
      </div>
      <div className="number number8">
        <span>8</span>
      </div>
      <div className="number number9">
        <span>9</span>
      </div>
      <div className="number number10">
        <span>10</span>
      </div>
      <div className="number number11">
        <span>11</span>
      </div>
      <div className="number number12">
        <span>12</span>
      </div>
    </div>
  );
};

export default Clock;
