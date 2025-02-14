import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/root';
import LoginForm from "../src/components/LoginForm"
import LandingPage from './components/landing';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },

      {
        path: "login",
        element: <LoginForm />
      },

      {
        path: '*',
        element: <p>Something went Wrong</p>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
