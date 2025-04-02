import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

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
    <>
      <div>
        <button onClick={() => {
          window.location.href = "/"
        }}>Landing Page</button>
        <button onClick={() => {
          window.location.href = "/Dashboard"
        }}>Dashboard</button>
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
