import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [chars, setChars] = useState(false);
  const [password, setPassword] = useState("");

  let passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pwd = "";
    let pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) {
      pass += "0123456789";
    }
    if (chars) {
      pass += "~!@#$%^&*_-+=?";
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * pass.length);
      pwd += pass.charAt(index);
    }

    setPassword(pwd);
  }, [length, numbers, chars, setPassword]);

  const copyPass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, chars, passwordGenerator]);

  return (
    <>
      <div
        className={`flex flex-col bg-slate-950  h-screen w-screen justify-start items-center font-mono`}
      >
        <h1 className="text-3xl font-mono font-bold mt-6">
          Password Generator
        </h1>
        <div className="flex p-1 m-10 w-3/4 h-64 flex-col justify-center items-center  bg-slate-500  rounded-xl">
          <div className="flex justify-center items-start h-1/3  w-auto p-1">
            <input
              type="text"
              value={password}
              className="bg-white/90 text-black text-lg h-12 w-[30rem]   rounded-l-xl px-2"
              readOnly
              ref={passRef}
            ></input>
            <button
              className="h-12 w-24 rounded-r-xl bg-blue-700 hover:bg-blue-900  text-xl font-bold"
              onClick={copyPass}
            >
              Copy
            </button>
          </div>
          <div className="flex justify-center items-center gap-x-10">
            <div className="flex justify-center items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={48}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              ></input>
              <label className="text-black text-xl">Length:{length}</label>
            </div>
            <div className="flex justify-center items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numbers}
                className="h-6 w-6 rounded-xl"
                onChange={() => {
                  setNumbers((prev) => !prev);
                }}
              ></input>
              <label className="text-black text-xl">Numbers</label>
            </div>
            <div className="flex justify-center items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={chars}
                className="h-6 w-6 rounded-xl"
                onChange={() => {
                  setChars((prev) => !prev);
                }}
              ></input>
              <label className="text-black text-xl">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
