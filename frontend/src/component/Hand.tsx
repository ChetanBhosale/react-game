import { FC, useEffect, useMemo, useState } from "react";
import HandImg from "../assets/HandImg.png";
import "./hand.css";
import { generateRandomNumber } from "../utils/Utility";

interface Props {
  value: number;
}

const Hand: FC<Props> = ({ value }) => {
  const [speed, setSpeed] = useState(15);

  const speedMemo = useMemo(() => {
    return speed;
  }, [speed]);

  const randomValues = useMemo(() => {
    setInterval(() => {
      setSpeed(speed - 1);
    }, 1000 * speed);
    return Array.from({ length: 6 }, () => generateRandomNumber(1, 13));
  }, [speed]);

  randomValues.map((n: number, index) => {
    console.log(n);
    document.documentElement.style.setProperty(
      `--random` + (index + 1),
      `-${n}%`
    );
  });

  return (
    <img
      src={HandImg}
      alt="hand"
      className={`${
        value % 2 === 0 ? "rotate-180 main-right right-[-15px] " : "main-left"
      }`}
      style={{
        animationDelay: `${generateRandomNumber(1, value)}s`,
        animationDuration: `${speedMemo}s`,
      }}
    />
  );
};

export default Hand;
