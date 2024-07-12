import React,{useState,useEffect} from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Dashboard ,{loader as DashboardLoader}from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans"
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Error from "./pages/Error"
import {auth} from './api'

export default function App() {
  const [user, setUser] = useState();
 useEffect(() => {
   auth.onAuthStateChanged((user) => {
     setUser(user);
   });
 });

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path='Vans-App' element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      errorElement={<Error />}
    />
    <Route
      path="signup"
      errorElement={<Error />}
      element={<SignUp />}
    />
    
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      loader={vanDetailLoader}
      errorElement={<Error />}
    />


    <Route  path="host" element={user ? <HostLayout /> : <Login />}>
        <Route
        index
        element={<Dashboard />}
        loader={DashboardLoader}
        errorElement={<Error />}
      />
      <Route
        path="income"
        element={<Income />}
    
      />
      <Route
        path="reviews"
        element={<Reviews />}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}
        errorElement={<Error />}
      >
        <Route
          index
          element={<HostVanInfo />}
       
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
        
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
        
        />
      </Route>
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
))


  return (
    <RouterProvider router={router} />
  )
}

