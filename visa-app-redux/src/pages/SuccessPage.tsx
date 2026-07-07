import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <h1 className="text-5xl font-bold text-green-700">
        🎉 Application Submitted
      </h1>

      <p className="mt-4 text-lg">
        Your visa application has been received successfully.
      </p>

      <Link to="/" className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Back to Home
      </Link>
    </div>
  );
}

export default SuccessPage;
