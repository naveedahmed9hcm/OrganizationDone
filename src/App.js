import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Employee from "./component/Employee";
import Medical from "./component/Medical";
import Education from './component/Education';
import Consent from './component/Consent';
import Board from "./component/Board";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Department from './component/Department';
import Designation from './component/Designation';
import Role from './component/Role';
import Project from './component/Project';
import Team from './component/Team';

function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Department/>}></Route>
   <Route path='Designation' element={<Designation/>}></Route>
   <Route path='Role' element={<Role/>}></Route>
   <Route path='Project' element={<Project/>}></Route>
   <Route path='Team' element={<Team/>}></Route>
    <Route path='Employee' element={<Employee/>}></Route>
    <Route path='Medical' element={<Medical/>}></Route>
    <Route path='Education' element={<Education/>}></Route>
    <Route path='Consent' element={<Consent/>}></Route>
    <Route path='Board' element={<Board/>}></Route>
   </Routes>
   </BrowserRouter>
 </>

  );
}

export default App;
