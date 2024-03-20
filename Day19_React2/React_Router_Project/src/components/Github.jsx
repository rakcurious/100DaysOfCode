import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Github() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("rakcurious");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        navigate(`/github/${username}`);
      });
  }, [username]);

  

  return (
    <div className="bg-white my-auto flex lg:px-20 py-auto sm:py-10 font-quicksand flex-grow">
      <div className="w-1/2 h-auto ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Github details
        </h2>
        <p className="mt-6 text-lg leading-8 ">
          Enter a github username to see detailed github profile
        </p>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={(e) => (e.key == "Enter" ? setUsername(user) : null)}
          autoFocus
          className="bg-blue-600/50 h-14 w-1/2 my-4 mr-4 outline-2 px-3 outline-black font-bold text-xl rounded-2xl"
        ></input>

        <button
          onClick={() => setUsername(user)}
          className="bg-gradient-to-r from-cyan-800/60 to-purple-800/60 h-14 w-1/2 my-4 mr-4 px-3 font-bold text-xl rounded-2xl text-black"
        >
          Get Github Details
        </button>
      </div>
      <div className="flex justify-center items-center gap-x-8">
        <img
          className="object-cover  h-48 w-48 rounded-full"
          src={data.avatar_url}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold leading-7 tracking-tight mb-1">
            {data.name}{" "}
          </h1>
          <p className="text-lg font-semibold leading-6 text-gray-900">
            Bio: {data.bio}
          </p>
          <p className="text-lg font-semibold leading-6 text-gray-900">
            {data.public_repos} Public Repositories
          </p>
          <a
            target="_blank"
            href={data.html_url}
            className="text-lg underline font-semibold leading-6 text-blue-900 cursor-pointer"
          >
            Profile link
          </a>
        </div>
      </div>
    </div>
  );
}
