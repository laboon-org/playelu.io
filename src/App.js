import './App.css';
import './css/playeluBanner.scss'
import './css/responsive.scss'
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
        {/* <Route path='/gameplay' element={<Gameplay />}>
        </Route> */}
      </Routes>
    </Router>
  );
}
export default App;
