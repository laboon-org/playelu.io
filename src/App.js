import './App.css';
import './scss/home/playeluHome.scss'
import './scss/reponsiveness/home/responsive.scss'
// import PlayeluBaner from './pages/banner/playeluBaner';
// import Gameplay from './pages/gameplay/gameplay';
import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Loading from './components/Loading';


const PlayeluBaner = React.lazy(() => import('./pages/banner/playeluBaner'))
const Gameplay = React.lazy(() => import('./pages/gameplay/gameplay'))
function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path='/' element={<PlayeluBaner />}>
          </Route>
          <Route path='/gameplay' element={<Gameplay />}>
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
}
export default App;
