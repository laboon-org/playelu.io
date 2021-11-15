
import './App.css';
import './css/playeluBanner.scss'
import './css/responsive.scss'
import PlayeluBaner from './components/playeluBaner';
import Gameplay from './pages/gameplay/gameplay';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <PlayeluBaner />
      <Routes>
        <Route path='/gameplay' component={Gameplay}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
