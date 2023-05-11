import './App.css';
import Main from './components/Main';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Login from './components/Login'

function App() {
  const [data, setdata] = useState();
  console.log(data);
  const [logindata, setlogin] = useState();
  useEffect(() => { axios.get("data.json").then(data => setdata(data.data)) }, [])
  console.log(logindata);
  return (
    <div className="App">
      {logindata ? <Main /> : <Login setLogin={setlogin} userdata={data && data.users} />}
    </div>
  );
}

export default App;
