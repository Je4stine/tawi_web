import './App.css';
import Login from './Components/Screens/Login';
import DashBoard from './Components/Screens/DashBoard';
import Sensors from './Components/Sensors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Rename from './Components/Screens/Rename';



function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="/DashBoard" element={<DashBoard/>}/>
        <Route path ="/Sensors" element={<Sensors/>}/>
        <Route path ="/Rename" element={<Rename/>}/>
      </Routes>
    </Router>
  );
}

export default App;
