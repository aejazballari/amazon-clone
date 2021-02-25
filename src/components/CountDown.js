import { useEffect, useState } from "react";

const CountDown = () => {
  const [timer, setTimer] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      let hours = 24 - d.getHours();
      let mins = 60 - d.getMinutes();
      if ((mins + "").length == 1) {
        mins = "0" + mins;
      }
      let secs = 60 - d.getSeconds();
      if ((secs + "").length == 1) {
        secs = "0" + secs;
      }
      setTimer(`${hours}:${mins}:${secs}`);
    }, 1000);
    return () => {
      clearInterval(interval);
      // <h1>`${hours}`</h1>;
    };
  }, []);

  return <h1>{timer}</h1>;
};

export default CountDown;
