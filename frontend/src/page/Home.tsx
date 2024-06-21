import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <button
        onClick={() => navigate("/game")}
        className="text-2xl w-56 h-16 bg-green-500 rounded-md hover:bg-green-600 "
      >
        Start Game
      </button>
    </div>
  );
};

export default Home;
