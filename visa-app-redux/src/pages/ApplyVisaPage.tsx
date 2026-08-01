import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addApplication } from "../redux/features/visa/visaSlice";
import type { RootState } from "../redux/store";
function ApplyVisaPage() {
  const form = useSelector((state: RootState) => state.visa);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    console.log("Changed:", e.target.name, e.target.value);

    dispatch(addApplication({ [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/review");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Apply for a Visa</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="FullName"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          value={form.FullName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="Passport"
          placeholder="Passport Number"
          className="w-full border p-3 rounded"
          value={form.Passport}
          onChange={handleChange}
        />

        <input
          type="text"
          name="Country"
          placeholder="Destination Country"
          className="w-full border p-3 rounded"
          value={form.Country}
          onChange={handleChange}
        />

        <select
          name="VisaType"
          className="w-full border p-3 rounded"
          value={form.VisaType}
          onChange={handleChange}
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
