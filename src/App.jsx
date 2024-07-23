import {
  Route,
  Link,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import './server';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import VansList from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound';
import Error from './components/Error';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
        <Route path='vans/:id' element={<VanDetail />} />

        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='vans' element={<VansList />} />
          <Route path='vans/:id' element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path='pricing' element={<HostVanPricing />} />
            <Route path='photos' element={<HostVanPhotos />} />
          </Route>
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
