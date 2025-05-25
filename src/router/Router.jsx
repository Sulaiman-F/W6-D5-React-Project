import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Nav from "../componetns/Nav";
import Footer from "../componetns/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import SearchJob from "../pages/Search-Job";
import Support from "../pages/Support";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/search-job", element: <SearchJob /> },
      { path: "/support", element: <Support /> },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
