// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Root from './pages/root';
// import LoginForm from "../src/components/LoginForm"
// import LandingPage from './components/landing';
// import SignupForm from './components/signupform';
// import Profile from "./pages/Profile"
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '/',
//         element: <LandingPage />,
//       },

//       {
//         path: "login",
//         element: <LoginForm />
//       },
//       {
//         path: "signup",
//         element: <SignupForm />
//       },
//       {
//         path: "profile",
//         element: <Profile  />
//       },

//       {
//         path: '*',
//         element: <p>Something went Wrong</p>
//       }
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;import { Routes, Route } from "react-router-dom";  // ❌ No need to import BrowserRouter


import { Routes, Route } from "react-router-dom"; // ✅ Ensure correct import
import Layout from "./components/layout";
import Landing from "./components/landing";
import Login from "./pages/login";
import Signup from "./pages/singnup";
import Profile from "./pages/Profile";

function App() {
    return (
        <Routes>  
            <Route path="/" element={<Layout />}>
                <Route index element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    );
}

export default App;


