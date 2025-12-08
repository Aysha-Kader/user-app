import { useNavigate } from "react-router-dom";

 function Users() {
  const navigate = useNavigate();

  const users = [
   { id: "1", name: "Aysha", age: 22 ,email:"aysha@gamil.com"},
    { id: "2", name: "Nashra", age: 25 ,email:"nashra@gamil.com"},
    { id: "3", name: "Ayrah", age: 28 ,email:"ayrah@gamil.com"},
    { id: "4", name: "Adil", age: 22 ,email:"adil@gamil.com"},
    { id: "5", name: "Niyas", age: 25 ,email:"niyas@gamil.com"},
    { id: "6", name: "Amjad", age: 28 ,email:"amjad123@gamil.com"},
 ];

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl    font-bold text-pink-600 mb-6">Users</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}
            className=" shadow-lg p-6 rounded-xl 
            hover:shadow-2xl hover:scale-105 transition border border-blue-200"
          >
               <   div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-2xl rounded-full mb-4">
              {user.name[0]}
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-600 mt-1">Age: {user.age}</p>
             <p className="text-gray-600 mt-1">Email: {user.email}</p>
        
          </div>
        ))}
      </div>
    </div>
  );
}



export default Users
