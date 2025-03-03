import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

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

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Profile</h2>

      {user ? (
        <div className="space-y-4">
          {Object.keys(user).map(
            (key) =>
              key !== "id" && (
                <div key={key} className="flex justify-between items-center">
                  <span className="font-semibold capitalize">{key}:</span>
                  {editingField === key ? (
                    <input
                      type="text"
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      className="border px-2 py-1 rounded-md"
                    />
                  ) : (
                    <span>{user[key]}</span>
                  )}
                  {editingField === key ? (
                    <button
                      onClick={handleSave}
                      className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-md"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(key, user[key])}
                      className="ml-2 px-3 py-1 bg-green-600 text-white rounded-md"
                    >
                      Edit
                    </button>
                  )}
                </div>
              )
          )}
        </div>
      ) : (
        <p className="text-gray-600">No user data found.</p>
      )}
    </div>
  );
};

export default Profile;
