import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';


//navigate cannot be used outside of a component of a browser router.

function App() {
  const navigate = useNavigate();

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

  function handleClick() {
    navigate('/');
  };

  function handleClick1() {
    navigate('/Dashboard');
  };

  return (
    <>
      <div>
        <button onClick={() => {
          handleClick();
        }}>Landing Page</button>
        <button onClick={() => {
          handleClick1();
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
