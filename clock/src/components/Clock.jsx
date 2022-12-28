const Clock = () => {
  return (
    <div className="clock">
      <div className="hand hour" data-hour-hand></div>
      <div className="hand minute" data-minute-hand></div>
      <div className="hand second" data-second-hand></div>
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
