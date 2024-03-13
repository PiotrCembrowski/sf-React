import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import Error from './pages/Error';
import AdminLayouts from './layouts/AdminLayouts';
import FilesList from './pages/FilesList';

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
      { 
        path: '', 
        element: <Admin />,
        loader: async () => {
          const response = await fetch('http://127.0.0.1:8000/fileslists')

          if (!response.ok) {
            // ...
          } else {
            const res = await response.json() 
            return res.lists
          }
        }
      },
      {
        path:'files',
        element: <FilesList/>,
        loader: async () => {
          const respone = await fetch('http://127.0.0.1:8000/files')

          if (!respone.ok) {
            // ...
          } else {
            const res = await respone.json()
            return res.files
          }
        }
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App
