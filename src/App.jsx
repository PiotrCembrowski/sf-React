import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import Error from './pages/Error';
import AdminLayouts from './layouts/AdminLayouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'signin', element: <SignIn />},
      { path: 'signup', element: <SignUp />},
      { path: 'pricing', element: <Pricing />},  
    ]
  },
  {
    path: '/admin',
    element: <AdminLayouts/>,
    children: [
      { path: '', element: <Admin /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App
