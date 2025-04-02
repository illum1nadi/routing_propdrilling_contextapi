import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  const router = [
    {
      route: "/Dashboard",
      component: Dashboard
    },
    {
      route: "/",
      component: Landing
    }
  ];

  return (
    <BrowserRouter>
      <Appbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {router.map((route, index) => (
            <Route 
              key={index} 
              path={route.route} 
              element={<route.component />} 
            />
          ))}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  function handleClick1() {
    navigate('/Dashboard');
  }

  return (
    <div>
      <button onClick={handleClick}>Landing Page</button>
      <button onClick={handleClick1}>Dashboard</button>
    </div>
  );
}

export default App;
