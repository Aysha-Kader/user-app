import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex justify-around items-center px-6 grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="bg-white/70  shadow-xl p-10 rounded-2xl max-w-xl text-center border border-white/40">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Experience</h1>

        <p className="text-gray-700 mb-6">
         10+ years of experice.
        </p>
       

        <button
          
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition"
        >
         Explore more
        </button>
      </div>

       <div className="bg-white/70  shadow-xl p-10 rounded-2xl max-w-xl text-center border border-white/40">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">About Us</h1>

        <p className="text-gray-700 mb-6">
          This app showcases the details of various users.
        </p>
       

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition"
        >
          Back Home
        </button>
      </div>
       <div className="bg-white/70  shadow-xl p-10 rounded-2xl max-w-xl text-center border border-white/40">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Clients</h1>

        <p className="text-gray-700 mb-6">
          1000+ more clients.
        </p>
      <button
          
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition"
        >
         Explore more
        </button>
        
      </div>
          
    </div>
  );
}
export default About;