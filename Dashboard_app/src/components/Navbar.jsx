import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "navbar dark" : "navbar"}>
      <input type="text" placeholder="Search..." />

      <div>
        🔔 👤
        <button onClick={() => setDark(!dark)}>Toggle</button>
      </div>
    </div>
  );
}
