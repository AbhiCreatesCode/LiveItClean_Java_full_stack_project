import { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const LoginForm = () => {
    const { login } = useContext(AuthContext); // ✅ Use context
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("https://json-server-1-wvnn.onrender.com/users"); // ✅ Fetch user data
            const user = response.data.find(
                (u) => u.username === formData.username && u.password === formData.password
            );

            if (user) {
                login(user); // ✅ Update AuthContext
                navigate("/");
            } else {
                setError("Invalid username or password"); // ✅ Show error for incorrect login
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center text-green-700 mb-6">Login</h1>
                {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div className="relative mb-4">
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            value={formData.username}
                            onChange={handleChange}
                            required 
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <FaUser className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    {/* Password Input */}
                    <div className="relative mb-4">
                        <input 
                            type="password"  // ✅ Fixed: Added password field
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
