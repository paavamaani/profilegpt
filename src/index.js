import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import Search from './components/Search';
import About from './components/About';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Search />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
