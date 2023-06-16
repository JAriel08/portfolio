import './App.css';
import Homepage from './pages/Homepage';
import AllProjectsPage from './pages/AllProjects/AllProjectsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<Homepage/>}/>
          <Route path='/allprojects' element={<AllProjectsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )   
}

export default App;
