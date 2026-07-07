import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplyVisaPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [passport, setPassport] = useState("");
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/review", {
      state: {
        fullName,
        passport,
        country,
        visaType,
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Visa Application</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Passport Number"
          className="w-full border p-3 rounded"
          value={passport}
          onChange={(e) => setPassport(e.target.value)}
        />

        <input
          type="text"
          placeholder="Destination Country"
          className="w-full border p-3 rounded"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <select
          className="w-full border p-3 rounded"
          value={visaType}
          onChange={(e) => setVisaType(e.target.value)}
        >
          <option value="">Select Visa Type</option>
          <option value="Tourist">Tourist</option>
          <option value="Student">Student</option>
          <option value="Work">Work</option>
        </select>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default ApplyVisaPage;
