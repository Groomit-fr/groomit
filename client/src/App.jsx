import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Apropos from "./pages/Apropos/Apropos";
import Factory from "./pages/Factory/Factory";
import SuccessOrder from "./pages/SuccessOrder/SuccessOrder";
import CancelOrder from "./pages/CancelOrder/CancelOrder";
import LegalNotice from "./pages/LegalNotice/LegalNotice";
import CGV from "./pages/CGV/CGV";


const Layout = () => {
    return (
        <div className="app">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
  { path: "/",
  element: <Layout/>,
  children: [
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/product/:id",
      element: <Product/>
    },
    {
      path:"/products",
      element: <Products/>
    },
    {
      path:"/apropos",
      element: <Apropos/>
    },
    {
      path:"/factory",
      element: <Factory/>
    },
    {
      path:"/successOrder",
      element:  <SuccessOrder/>
    },
    {
      path:"/cancelOrder",
      element:  <CancelOrder/>
    },
    {
      path:"/cgv",
      element:  <CGV/>
    },
    {
      path:"/legalNotice",
      element:  <LegalNotice/>
    }
  ]
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
