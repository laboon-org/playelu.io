
import './App.css';

import './css/playeluBanner.css'
import PlayeluBaner from './components/playeluBaner';




// const subcribe = ()=>{
//   const btn = document.querySelector('.subcribe-btn');
//   const input = document.querySelector('.playelu-btn')
//   const backInput = document.querySelector('.inputback-btn')
//   btn.addEventListener('click', ()=>{
//       input.classList.add('active');
//       btn.classList.remove('active') 
//   })
//   backInput.addEventListener('click',()=>{
//     input.classList.remove('active');
//     btn.classList.add('active') 
//   })
// }
// window.addEventListener('click', (event) => {
//   subcribe();
// });
function App() {

  return (
    <div className='playelu-body'>
      <PlayeluBaner />
    </div>

  );
}

export default App;
