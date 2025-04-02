import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {
  const router = [
    {
      route: "/",
      component: Dashboard
    },
    {
      route: "/dashboard",
      component: Landing
    }
  ];

  return (
    <>
      <div>
        Hi hello.
      </div>
      <BrowserRouter>
        <Routes>
          {router.map((route, index) => (
            <Route 
              key={index} 
              path={route.route} 
              element={<route.component />} 
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
