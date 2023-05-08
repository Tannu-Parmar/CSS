import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App({ Data }) {
  return (
    <ul>
      {Data.map((e) => {
        return (
          <li>
            {e.name};{e.children ? <App Data={e.children} /> : null}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
