        
import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = [
    { id: "1", name: "Aysha", age: 22 ,email:"aysha@gamil.com"},
    { id: "2", name: "Nashra", age: 25 ,email:"nashra@gamil.com"},
    { id: "3", name: "Ayrah", age: 28 ,email:"ayrah@gamil.com"},
    { id: "4", name: "Adil", age: 22 ,email:"adil@gamil.com"},
    { id: "5", name: "Niyas", age: 25 ,email:"niyas@gamil.com"},
    { id: "6", name: "Amjad", age: 28 ,email:"amjad123@gamil.com"},

  ];

  const user = users.find((e) => e.id === id);

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-6">
      <div className="bg-white/70 l shadow-xl p-10 rounded-2xl max-w-md text-center border border-white/40">
        {user ? (
          <>
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-4xl rounded-full mx-auto mb-4 shadow-lg">
              {user.name[0]}
            </div>

            <h1 className="text-3xl font-bold text-purple-700">{user.name}</h1>
            <p className="text-gray-700 mt-2 mb-6 text-lg">Age: {user.age}</p>
             <p className="text-gray-700 mt-2 mb-6 text-lg">Email: {user.email}</p>

            <button
              onClick={() => navigate("/users")}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition"
            >
              Back to Users
            </button>
          </>
        ) : (
          <p className="text-red-600 text-xl font-semibold">User Not Found</p>
        )}
      </div>
    </div>
  );
}
export default  UserDetail;