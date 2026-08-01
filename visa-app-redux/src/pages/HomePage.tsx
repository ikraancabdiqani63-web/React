import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        Online Visa Application
      </h1>

      <p className="text-gray-600 mb-8 text-lg">
        Apply for your visa quickly and securely.
      </p>

      <Link
        to="/apply"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Apply visa
      </Link>
      <br />
      
    </div>
  );
}

export default HomePage;
