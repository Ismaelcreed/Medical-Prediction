import WelcomePage from "../Pages/Welcome/WelcomePage";
import Model from "../Pages/Model/Model";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function RoutesMain() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/MyDokotera-app" element={<Model />} />
            </Routes>
        </Router>
      
    </div>
  )
}

export default RoutesMain
