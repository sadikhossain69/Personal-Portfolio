import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <div className='bg-[#2D2B3B]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects/:id' element={<ProjectDetail/>} />
      </Routes>
    </div>
    // #2D2B3B
  );
}

export default App;
