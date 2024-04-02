import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import HomeEnglish from './pages/HomeEnglish';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/english' element={<HomeEnglish />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
