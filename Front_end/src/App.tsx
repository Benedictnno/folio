import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e : any) => {
e.preventDefault()
// const res = 
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="user name"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" onClick={handleChange}> Submit</button>
      </form>
    </>
  );
}

export default App;
