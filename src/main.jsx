import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage1 from './components/product/ProductPage1.jsx';
import AboutUs from './page/about-us/About-us.jsx';
import Layout from './components/layout/Layout.jsx';
import ProductDetail from './page/productDetail/ProductDetail.jsx';
import NotFound from './components/notfoundePage/Notfound.jsx';
import Register from './page/(auth)/register/Register.jsx';
import Login from './page/(auth)/login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/products",
        element: <ProductPage1 />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/prduct-Detail",
        element: <ProductDetail/>
      }
    ],
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
