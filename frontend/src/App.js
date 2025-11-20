import {BrowserRouter, Routes, Route} from 'react-router-dom'
 // BrowserRouter wraps everywhere the router will be used, Routes wraps all of the individual routes, individual route component to create a single route

import './App.css';

// pages & components
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>  {/*surronds everything that needs to use the routing system */}
    <div className="pages"> {/* all pages inside here */}
          <Routes>
            <Route 
              path="/"
               element={<Home />}  /*element that will be rendered for this route */
            />
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
