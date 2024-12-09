import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_body from "../pages/home_body";
import Header from "../pages/header";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home_body />} />
          {/* <Route path="/" element={<Header />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
