import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { lazy ,Suspense} from "react";
import UserContext from "./utils/UserContext";
// header
//   -logo
//   -Nav items
// body
//   -search
//   -Resto containers
//      -Resto cards
// footer
//   -copyrights
//    -links
//    -address
//    -contact

const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
const [userName,setUserName]=useState("");

useEffect(()=>{
  const data={
   diffName:"Pooja"
  }
setUserName(data.diffName)
},[])




  return (
    <UserContext.Provider value={{LoggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};


const appRouter=createBrowserRouter([
  {
path:"/",
element:<AppLayout />,
errorElement:<Error/>,
children:[
  {
  path:"/",
  element:<Body />,
},
  {
    path:"/about",
    element:<About />,
  },
  {
    path:"/contact",
    element:<Contact />,
  },
  {
    path:"/restaurant/:resId",
    element:<RestaurantMenu/>,
  },
  {
    path:"/grocery",
    element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
  }
],

}

],  { basename: "/food-app-delivery-host" } // Set basename here
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
