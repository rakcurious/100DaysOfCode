import { useState } from "react";
function App() {

  let [counter, setCounter] = useState(0)

          const minus = () => {
            setCounter(counter-1)
          }
          const plus = () => {
            setCounter(counter+1);
          }
  return (
    <>
      <div className="flex justify-center items-center flex-col font-mono font-bold">
      <h1 className="text-xl font-bold m-3">Counter</h1>
      <div className="text-center p-2 flex justify-center items-center bg-slate-500 rounded-lg h-10 w-10" onClick={minus}><p className="text-xl">-</p></div>
      <h1 className="text-xl m-2">Value: {counter}</h1>
      <div className="text-center p-2 flex justify-center items-center bg-slate-500 rounded-lg h-10 w-10" onClick={plus}><p className="text-xl">+</p></div>
      </div>
      
    </>
  )
}

export default App
