import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./data.json";

function App() {
  const [count, setCount] = useState(0);
  console.log(data);
  return (
    <>
      <h1>Student Marksheet</h1>
      <table style={{ borderCollapse: "collapse" }}>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>UserName</th>
          <th>Department</th>
          <th>CN</th>
          <th>DBMS</th>
          <th>AI</th>
          <th>PP</th>
          <th>Per</th>
          <th>Grade</th>
        </tr>
        {data.map((e) => {
          var per =
            (e.MarksObtained.ComputerNetworks +
              e.MarksObtained.DBMS +
              e.MarksObtained.AI +
              e.MarksObtained["Pyhton Programming"]) /
            4;
          return (
            <tr>
              <td>{e.UserName}</td>
              <td>{e.Department}</td>
              <td>{e.MarksObtained.ComputerNetworks}</td>
              <td>{e.MarksObtained.DBMS}</td>
              <td>{e.MarksObtained.AI}</td>
              <td>{e.MarksObtained["Pyhton Programming"]}</td>
              <td>{per}</td>
              <td>
                {per >= 85 ? (
                  <p style={{ color: "green" }}>A</p>
                ) : per >= 70 ? (
                  <p style={{ color: "blue" }}>B</p>
                ) : per >= 50 ? (
                  <p style={{ color: "yellow" }}>C</p>
                ) : (
                  <p style={{ color: "orange" }}>D</p>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
