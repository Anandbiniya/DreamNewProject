
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Info } from "./Pages/Info";
import { Contact } from "./Pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";


const router=createBrowserRouter([

  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"info",
        element:<Info/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  }
 
])

const App =() =>{
  return <RouterProvider router={router}></RouterProvider>
}


export default  App