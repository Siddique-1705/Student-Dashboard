import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Overview from './Pages/Overview';
import Students from './Pages/Students';
import Announcement from './Pages/Announcement';
import Assignment from './Pages/Assignment';
import Circular from './Pages/Circular';
import Attendance from './Pages/Attendance';
import './App.css'
import { Mainmenu } from "./Components/Navbar/Mainmenu";

function App() {

  return (
   <BrowserRouter>
   <Navbar />
   <div className="page-flex">
   <Mainmenu />
    <Routes>
      <Route path='/Overview' element={<Overview />}/>
      <Route path='/Students' element={<Students />}/>
      <Route path='/Announcement' element={<Announcement />}/>
      <Route path='/Assignment' element={<Assignment />}/>
      <Route path='/Circular' element={<Circular />}/>
      <Route path='/Attendance' element={<Attendance />}/>
    </Routes>
    </div>
   </BrowserRouter>
  );
}
 
export default App
