// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [editingField, setEditingField] = useState(null);
//   const [tempValue, setTempValue] = useState("");

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleEdit = (field, value) => {
//     setEditingField(field);
//     setTempValue(value);
//   };

//   const handleSave = async () => {
//     if (user) {
//       const updatedUser = { ...user, [editingField]: tempValue };

//       try {
//         await axios.put(`https://json-server-1-wvnn.onrender.com/users/${user.id}`, updatedUser);
//         setUser(updatedUser);
//         localStorage.setItem("user", JSON.stringify(updatedUser));
//       } catch (error) {
//         console.error("Error updating user:", error);
//       }
//     }
//     setEditingField(null);
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-green-700 mb-4">Profile</h2>

//       {user ? (
//         <div className="space-y-4">
//           {Object.keys(user).map(
//             (key) =>
//               key !== "id" && (
//                 <div key={key} className="flex justify-between items-center">
//                   <span className="font-semibold capitalize">{key}:</span>
//                   {editingField === key ? (
//                     <input
//                       type="text"
//                       value={tempValue}
//                       onChange={(e) => setTempValue(e.target.value)}
//                       className="border px-2 py-1 rounded-md"
//                     />
//                   ) : (
//                     <span>{user[key]}</span>
//                   )}
//                   {editingField === key ? (
//                     <button
//                       onClick={handleSave}
//                       className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-md"
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleEdit(key, user[key])}
//                       className="ml-2 px-3 py-1 bg-green-600 text-white rounded-md"
//                     >
//                       Edit
//                     </button>
//                   )}
//                 </div>
//               )
//           )}
//         </div>
//       ) : (
//         <p className="text-gray-600">No user data found.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;


import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext); // Get logout function from AuthContext

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleEdit = (field, value) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = async () => {
    if (user) {
      const updatedUser = { ...user, [editingField]: tempValue };

      try {
        await axios.put(`https://json-server-1-wvnn.onrender.com/users/${user.id}`, updatedUser);
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
    setEditingField(null);
  };

  const handleDeleteAccount = async () => {
    if (user) {
      try {
        await axios.delete(`https://json-server-1-wvnn.onrender.com/users/${user.id}`);
        
        // Call logout function from AuthContext
        logout();

        // Remove user data, close popup, and redirect to login
        setUser(null);
        setShowDeletePopup(false);
        navigate("/login");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Profile</h2>

      {user ? (
        <div className="space-y-6">
          {Object.keys(user).map(
            (key) =>
              key !== "id" && (
                <div
                  key={key}
                  className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm"
                >
                  <span className="font-semibold text-gray-700 capitalize">{key}:</span>
                  {editingField === key ? (
                    <input
                      type="text"
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      className="border px-3 py-1 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-400"
                    />
                  ) : (
                    <span className="text-gray-800">{user[key]}</span>
                  )}
                  {editingField === key ? (
                    <button
                      onClick={handleSave}
                      className="ml-2 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(key, user[key])}
                      className="ml-2 px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    >
                      Edit
                    </button>
                  )}
                </div>
              )
          )}

          {/* Delete Account Button */}
          <button
            onClick={() => setShowDeletePopup(true)}
            className="w-full px-4 py-2 mt-6 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition shadow-lg"
          >
            Delete Account
          </button>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No user data found.</p>
      )}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Are you sure you want to delete your account?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteAccount}
                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeletePopup(false)}
                className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
