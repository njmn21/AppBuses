import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusSection from "./components/BusSection";
import BusCardDetail from "./components/BusCardDetail/BusCardDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusSection />} />
        <Route path="/buses/:id" element={<BusCardDetail />} />
      </Routes>
    </Router>
  )
}

export default App;