import './App.css';
import './scss/home/playeluHome.scss'
import './scss/reponsiveness/home/responsive.scss'
import PlayeluBaner from './pages/banner/playeluBaner';
import Gameplay from './pages/gameplay/gameplay';
import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        {/* <PlayeluBaner/> */}
        <Route path='/' element={<PlayeluBaner />}>
        </Route>
        <Route path='/gameplay' element={<Gameplay />}>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
