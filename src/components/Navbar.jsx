import { useNavigate } from "react-router-dom";

 function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-extrabold text-white cursor-pointer drop-shadow"
          onClick={() => navigate("/")}
        >
          UserApp
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2   text-white font-medium rounded-lg hover:bg-white/40 transition hidden md:flex"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/about")}
            className="px-4 py-2   text-white font-medium rounded-lg hover:bg-white/40 transition hidden md:flex"
          >
            About
          </button>

          <button
            onClick={() => navigate("/users")}
            className="px-5 py-2  font-semibold rounded-lg hover:bg-white-100 text-white hidden md:flex"
          >
            Users
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;