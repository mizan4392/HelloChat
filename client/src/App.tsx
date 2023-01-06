import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext, UserI } from "./context/UserContext";

function App() {
  const [user, setCurrentUser] = useState<UserI | undefined>();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <p>Home</p>, // <Home />,
        },
        {
          path: "/profile/:id",
          element: <p>Profile</p>, //<Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <p>Login</p>, //<Login />,
    },
    {
      path: "/register",
      element: <p>Register</p>, //<Register />,
    },
  ]);
  const setUser = (user: UserI) => {
    setCurrentUser(user);
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;

const Layout = () => {
  // const navigate = useNavigate();
  // const { setUser } = useContext(UserContext);
  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   if (token) {
  //     (async () => {
  //       const res = await get("/user/get-logged-in-userInfo");

  //       if (res.ok) {
  //         const data = await res.json();
  //         setUser && setUser(data);
  //       } else {
  //         navigate("/login");
  //       }
  //     })();
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <>
      <NavBar />
      <div className="flex">Layout</div>
    </>
  );
};
