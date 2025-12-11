import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./components/routes/Login";
import Home from "./components/routes/Home";
import RootLayout from "./components/pages/RootLayout";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {
  const isLoggedIn = !!localStorage.getItem("user");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
