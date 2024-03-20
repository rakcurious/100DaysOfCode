
import { Link, NavLink, useParams } from "react-router-dom";

const Header = () => {
  const {username} = useParams()
  
  return (
    <div className="bg-gradient-to-r from-cyan-800/60 to-purple-800/60   font-quicksand  font-medium text-black">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="black"
              fill="black"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
              Router
            </span>
          </Link>

          <ul className="flex items-center space-x-8 lg:flex">
            <li>
              <NavLink to='/'
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-white font-extrabold"
                      : "font-semibold text-black"
                  } tracking-wide  transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink to={`/github/${username}`}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-white font-extrabold"
                      : "font-semibold text-black"
                  } tracking-wide  transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Github
              </NavLink>
            </li>

            <li>
            <NavLink to='/about'
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-white font-extrabold "
                      : "font-semibold text-black"
                  } tracking-wide  transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
