import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import Home from "./Components/Home/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    <Toaster position="top-center" reverseOrder={false} />,
  ]);
  return <RouterProvider router={router} />;
}

export default App;
