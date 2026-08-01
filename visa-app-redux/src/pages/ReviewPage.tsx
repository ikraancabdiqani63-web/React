import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function ReviewPage() {
  const navigate = useNavigate();
  const form = useSelector((state: RootState) => state.visa);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Review Your Application</h2>

      <p>
        <strong>Name:</strong> {form.FullName}
      </p>

      <p>
        <strong>Passport:</strong> {form.Passport}
      </p>

      <p>
        <strong>Country:</strong> {form.Country}
      </p>

      <p>
        <strong>Visa Type:</strong> {form.VisaType}
      </p>

      <button
        onClick={() => navigate("/success")}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded"
      >
        Submit Application
      </button>
    </div>
  );
}

export default ReviewPage;