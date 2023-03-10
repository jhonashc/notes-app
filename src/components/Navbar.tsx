import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";

export const Navbar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const isActive = () =>
    window.scrollY > 0 ? setActive(true) : setActive(false);

  const logout = () => {
    navigate("/auth/login", {
      replace: true,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 p-4 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ${
        active ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <FaReact className="text-2xl mr-1" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Notes
          </span>
        </Link>
        <div className="flex items-center md:order-2 relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt="user photo"
            />
          </button>
          {open && (
            <div className="z-50 absolute top-10 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  name@company.com
                </span>
              </div>
              <ul className="py-2">
                <li onClick={() => setOpen(false)}>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li
                  onClick={logout}
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
