import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        address: "",
        password: ""
    });
    
    const navigate = useNavigate();

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://json-server-1-wvnn.onrender.com/users", formData);
            alert("Signup successful!");
            navigate("/login");
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Failed to sign up. Try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center text-green-700 mb-6">Sign Up</h1>
                
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div>
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

                            <div className="relative mb-4">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <FaEnvelope className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                            </div>

                            <button type="button" onClick={nextStep} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
                                Next
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <div className="relative mb-4">
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <FaPhone className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                            </div>

                            <div className="relative mb-4">
                                <input 
                                    type="text" 
                                    name="address" 
                                    placeholder="Address" 
                                    value={formData.address}
                                    onChange={handleChange}
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <FaMapMarkerAlt className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                            </div>

                            <div className="flex justify-between">
                                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300">
                                    Back
                                </button>
                                <button type="button" onClick={nextStep} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <div className="relative mb-4">
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                            </div>

                            <div className="flex justify-between">
                                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300">
                                    Back
                                </button>
                                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
