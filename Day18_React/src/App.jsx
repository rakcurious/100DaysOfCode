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
      <h1>yo mr white</h1>

      <h1>Counter</h1>
      <br />
      <button onClick={minus}>-</button>
      <h1>Value: {counter}</h1>
      <button onClick={plus}>+</button>
    </>
  )
}

export default App
