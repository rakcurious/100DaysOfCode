import { useState } from "react";
function App() {
  const [color, setColor] = useState("purple");

  const changeColor = (col) => {
    setColor(col);
  };
  return (
    <>
      <div
        className={`flex ${color} h-screen w-screen justify-center items-end  font-mono font-bold py-10`}
      >
        <div className="flex p-1 m-10 w-auto h-16 justify-center items-center font-mono font-bold bg-white/50  rounded-xl">
          <div
            className="text-center p-2 flex justify-center items-center bg-red-500 rounded-lg h-10 w-24 mx-4"
            onClick={() => changeColor("bg-red-500")}
          >
            <p className="text-xl">Red</p>
          </div>
          <div
            className="text-center p-2 flex justify-center items-center bg-green-500 rounded-lg h-10 w-24 mx-4"
            onClick={() => changeColor("bg-green-500")}
          >
            <p className="text-xl">Green</p>
          </div>
          <div
            className="text-center p-2 flex justify-center items-center bg-blue-500 rounded-lg h-10 w-24 mx-4"
            onClick={() => changeColor("bg-blue-500")}
          >
            <p className="text-xl">Blue</p>
          </div>
          <div
            className="text-center p-2 flex justify-center items-center bg-cyan-500 rounded-lg h-10 w-24 mx-4"
            onClick={() => changeColor("bg-cyan-500")}
          >
            <p className="text-xl">Cyan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
