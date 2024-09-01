import React,{useState,useEffect} from 'react';
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
  const NotFound=React.lazy(()=>import("./pages/NotFound"));
  const Home=React.lazy(()=>import("./pages/Home"));
  const About=React.lazy(()=>import("./pages/About"));
  const Income=React.lazy(()=>import("./pages/Host/Income"));
  const Reviews=React.lazy(()=>import("./pages/Host/Reviews"));
  const HostVanInfo=React.lazy(()=>import("./pages/Host/HostVanInfo"));
  const HostVanPricing=React.lazy(()=>import("./pages/Host/HostVanInfo"));
  const HostVanPhotos=React.lazy(()=>import( "./pages/Host/HostVanPhotos"));
  const Login=React.lazy(()=>import("./pages/Login"));
  const SignUp=React.lazy(()=>import("./pages/SignUp"));
  const Error=React.lazy(()=>import("./pages/Error"));
  const PaymentCard=React.lazy(()=>import('./components/PaymentCard'))
  const  HostLayout=React.lazy(()=>import("./components/HostLayout"));
  

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
      errorElement={<React.Suspense 
        fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
          <Error />
        </React.Suspense>}
    />
    <Route
      path="signup"
      errorElement={<React.Suspense 
        fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
          <Error />
        </React.Suspense>}
      element={<React.Suspense 
        fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
          <SignUp />
        </React.Suspense>}
    />
    
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<React.Suspense 
        fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
          <Error />
        </React.Suspense>}
      loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      loader={vanDetailLoader}
      errorElement={<React.Suspense 
        fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
          <Error />
        </React.Suspense>}
    />

<Route 
      path="vans/booking" 
      element={<PaymentCard />} 
      errorElement={<React.Suspense 
        fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
          <Error />
        </React.Suspense>}
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
        errorElement={<React.Suspense 
          fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
            <Error />
          </React.Suspense>}
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
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
        errorElement={<React.Suspense 
          fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
            <Error />
          </React.Suspense>}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}
        errorElement={<React.Suspense 
          fallback={<ReactLoading type={"bars"} color="#000"  className="loading-bar"/>}>
            <Error />
          </React.Suspense>}
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

