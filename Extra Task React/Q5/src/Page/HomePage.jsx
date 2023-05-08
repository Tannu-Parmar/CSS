import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const Navigate = useNavigate();
  return (
    <div className="HPConatiner">
      <h2>To Start Exam Please Click Start Button</h2>
      <h4>Total 3 Qustions, You have to solve in 10Min.</h4>
      <button onClick={() => Navigate("/Exam")}>Start</button>
    </div>
  );
};
