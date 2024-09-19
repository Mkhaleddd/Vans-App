import React,{useState,useEffect,lazy,memo} from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import  Layout from "./components/Layout"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Dashboard ,{loader as DashboardLoader}from "./pages/Host/Dashboard";
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans";
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail";
import {auth} from './api'
import ReactLoading from 'react-loading';

export default function App() {
  const NotFound=lazy(()=>import("./pages/NotFound"));
  const Home=lazy(()=>import("./pages/Home"));
  const About=lazy(()=>import("./pages/About"));
  const Income=lazy(()=>import("./pages/Host/Income"));
  const Reviews=lazy(()=>import("./pages/Host/Reviews"));
  const HostVanInfo=memo(lazy(()=>import("./pages/Host/HostVanInfo")));
  const HostVanPricing=memo(lazy(()=>import("./pages/Host/HostVanInfo")));
  const HostVanPhotos=memo(lazy(()=>import( "./pages/Host/HostVanPhotos")));
  const Login=lazy(()=>import("./pages/Login"));
  const SignUp=lazy(()=>import("./pages/SignUp"));
  const Error=memo(lazy(()=>import("./pages/Error")));
  const PaymentCard=lazy(()=>import('./components/PaymentCard'))
  const  HostLayout=lazy(()=>import("./components/HostLayout"));
  const HostProfile=lazy(()=>import("./pages/Host/HostProfile"))
 
  

  const [user, setUser] = useState();
 useEffect(() => {
   auth.onAuthStateChanged((user) => {
     setUser(user);
   });
 });

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    
        
    <Route path='Vans-App' element={<React.Suspense 
    fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
      <Home />
    </React.Suspense>} />
    <Route path="about" element={<React.Suspense 
    fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
      <About />
    </React.Suspense>}  />
    <Route
      path="login"
      element={<React.Suspense 
        fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
          <Login/>
        </React.Suspense>}
      errorElement={<Error />}
    />
    <Route
      path="signup"
      errorElement={<Error />}
      element={<React.Suspense 
        fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
          <SignUp />
        </React.Suspense>}
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

<Route 
      path="vans/booking" 
      element={<PaymentCard />} 
      errorElement={<Error />}
    />
    <Route  path="host" element={user ? <React.Suspense 
    fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
      <HostLayout />
    </React.Suspense>: <React.Suspense 
    fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
      <Login />
    </React.Suspense>}>
        <Route
        index
        element={<Dashboard />}
        loader={DashboardLoader}
        errorElement={<Error />}
      />
      <Route
        path="income"
        element={<React.Suspense 
          fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
            <Income />
          </React.Suspense>}
    
      />
      <Route
        path="reviews"
        element={<React.Suspense 
          fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
            <Reviews />
          </React.Suspense>}
      />
      <Route
        path="profile"
        element={<React.Suspense 
          fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
            <HostProfile />
          </React.Suspense>}
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
          element={<React.Suspense 
            fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
              <HostVanInfo />
            </React.Suspense>}
       
        />
        <Route
          path="pricing"
          element={<React.Suspense 
            fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
              <HostVanPricing />
            </React.Suspense>}
        
        />
        <Route
          path="photos"
          element={<React.Suspense 
            fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
              <HostVanPhotos/>
            </React.Suspense>}
        
        />
      </Route>
    </Route>

    <Route path="*" element={<React.Suspense 
    fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
      <NotFound />
    </React.Suspense>} />
  </Route>
))


  return (
    <RouterProvider router={router} />
  )
}

