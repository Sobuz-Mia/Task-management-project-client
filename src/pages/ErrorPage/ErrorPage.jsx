import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-lg text-gray-700 mb-4">
          Something went wrong. Please try again later.
        </p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
        >
          <Link to={'/'}>Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
