import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import HomeEnglish from './pages/HomeEnglish';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/english' element={<HomeEnglish />} />
    </Routes>
  );
}

export default App;
