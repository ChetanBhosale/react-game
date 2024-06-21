import { useEffect } from "react";
import Hand from "../component/Hand";

const Game = () => {
  // const [apper, setApper] = useState();

  useEffect(() => {}, []);

  return (
    <div className="max-w-md m-auto h-screen flex justify-center items-center">
      <div className="w-full h-[90vh] relative bg-slate-200 overflow-hidden rounded-md grid grid-cols-2">
        {Array(25)
          .fill({})
          .map((_, index) => (
            <Hand key={index} value={index} />
          ))}
      </div>
    </div>
  );
};

export default Game;
