import { useLocation, useNavigate } from "react-router-dom";

function ReviewPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Review Your Application</h2>

      <p>
        <strong>Name:</strong> {state.fullName}
      </p>
      <p>
        <strong>Passport:</strong> {state.passport}
      </p>
      <p>
        <strong>Country:</strong> {state.country}
      </p>
      <p>
        <strong>Visa Type:</strong> {state.visaType}
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
