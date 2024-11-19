import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusSection from "./components/BusSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusSection />} />
      </Routes>
    </Router>
  )
}

export default App;