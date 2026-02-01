import React, { useState } from "react";
import axios from "axios";

const App = () => {
  let [username, setUsername] = useState("");
  let [age, setAge] = useState("");
  let [city, setCity] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  async function getRes() {
    try {
      const res = await axios.post("http://localhost:8000/", {
        username,// by default js me username:username ho jata hai 
        age,
        city,
        email,
        password,
      });

      console.log("Server response:", res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => getRes()}>Click</button>
    </div>
  );
};

export default App;
