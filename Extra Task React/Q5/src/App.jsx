import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Page/HomePage";
import "./App.css";
import { Exam } from "./Page/Exam";

function App({ Data }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Exam" element={<Exam />} />
    </Routes>
  );
}

export default App;
