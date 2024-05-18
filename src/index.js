import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import UserContext from './userContext/UserContext';
import Contact from './Contatc';
import Register from './Register';
import Login from './Login';
import User from './userContext/user';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {path:'/',
    element:<App></App>
  },{
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/home',
    element:<Home></Home>
  }
])
root.render(
  <User>
  <UserContext>
  <RouterProvider router={router}>
  </RouterProvider>
  </UserContext>
  </User>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
