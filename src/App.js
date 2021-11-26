import './App.css';
import './css/home/playeluHome.scss'
import './css/reponsiveness/home/responsive.scss'
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
