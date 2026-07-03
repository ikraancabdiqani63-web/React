import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <h2>Hello {name}</h2>
    </div>
  );
}
export default NameInput;
