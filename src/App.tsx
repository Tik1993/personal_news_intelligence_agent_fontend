import SubscribeForm from "./components/SubscribeForm";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200">
          {/* Badge / Header */}
          <div className="mb-6">
            <span className="inline-block bg-gray-800 text-white text-lg md:text-xl font-semibold px-3 py-1 rounded-full">
              Welcome to My News Agent
            </span>
          </div>

          {/* Description */}
          <h1 className="text-gray-800 text-2xl md:text-3xl font-medium mb-4">
            Get the latest Technology & AI news
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Sign in with your name and email, and Scribe News will be sent to
            you every morning and afternoon.
          </p>

          {/* Subscription Form */}
          <SubscribeForm />
        </div>
      </div>
    </>
  );
}

export default App;
