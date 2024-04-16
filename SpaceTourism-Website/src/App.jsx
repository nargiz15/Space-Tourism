import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Moon from "./Components/Moon";
import Mars from "./Components/Mars";
import Europa from "./Components/Europa";
import Titan from "./Components/Titan";
import Commander from "./Components/Commander"
import MissionSpecialist from "./Components/MissionSpecialist "
import Pilot from "./Components/Pilot"
import FlightEngineer from "./Components/FlightEngineer"

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" 
       >
          
          <Route path="" element={<Destination><Moon /></Destination>}/>
          <Route path="moon" element={<Destination><Moon /></Destination>} />
          <Route path="mars" element={<Destination><Mars /></Destination>} />
          <Route path="europa" element={<Destination><Europa /></Destination>} />
          <Route path="titan" element={<Destination><Titan /></Destination>} />
        </Route>

        <Route path="crew"
        >
      
       
       <Route path="" element={<Crew><Commander /></Crew>} /> 
       <Route path="missionSpecialist" element={<Crew><MissionSpecialist /></Crew>} />
       <Route path="pilot" element={<Crew><Pilot /></Crew>} />
       <Route path="flightEngineer" element={<Crew><FlightEngineer /></Crew>} />
      </Route>

        <Route path="technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
