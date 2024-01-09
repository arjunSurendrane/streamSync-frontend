import NotfoundImage from "../assets/not-found.svg";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">
          404 - Not Found
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <img
          className="w-64 animate-bounce"
          src={NotfoundImage}
          alt="404 Illustration"
        />
      </div>
    </div>
  );
};

export default NotFound;
