import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_body from "../pages/home_body";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home_body />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
