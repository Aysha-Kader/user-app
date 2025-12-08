import { useNavigate } from "react-router-dom";

 function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">
        Welcome to <span className="text-pink-600">UserApp</span>
      </h1>

      <p className="text-gray-700 max-w-xl mb-8 text-lg">
       UserApp is a streamlined platform designed to quickly display essential details for various individuals, such as employees, contacts, or team members. Within a compact interface, each person's profile is neatly summarized across four lines, typically showing their full name, job title or role, department or team affiliation, and primary contact information like an email address or phone number. This efficient design allows users to quickly scan a list and access key information without needing to open separate, detailed profiles. It is optimized for immediate data retrieval and organization.

      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/about")}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:opacity-90 transition"
        >
          About Us
        </button>

        <button
          onClick={() => navigate("/users")}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:opacity-90 transition"
        >
          View Users
        </button>
      </div>
    </div>
  );
}
export default Home;