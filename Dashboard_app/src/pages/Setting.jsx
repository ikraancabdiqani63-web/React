
            import { useState } from "react";
import MainLayout from "../Layouts/MainLayout";

function Setting() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const handleSave = () => {
    alert("Setting Saved!");
  };

  return (
    <MainLayout>
      <div className="setting">
        <h1>Settings</h1>

        <div className="setting-item">
          <label>Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="setting-item">
          <label>Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="setting-item">
          <label>Language</label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Arabic</option>
          </select>
        </div>

        <button onClick={handleSave}>Save Setting</button>
      </div>
    </MainLayout>
  );
}

export default Setting;