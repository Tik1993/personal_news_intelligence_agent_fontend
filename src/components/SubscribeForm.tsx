import { useRef, useState } from "react";
import type { FormEvent } from "react";

const SubscribeForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const name = nameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";

    // Check if email (required) and name (optional) exist
    if (!email) {
      setError("Please enter your email.");
      setMessage("");
      return;
    }

    // If you also want to require name, uncomment:
    // if (!name) {
    //   setError("Please enter your name.");
    //   setMessage("");
    //   return;
    // }

    const person = { name, email };
    console.log(person);

    setMessage("Thanks for subscribing!");
    setError("");

    // Clear inputs
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name Input */}
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
          Name
        </label>

        <input
          ref={nameRef}
          id="name"
          type="text"
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>
      {/* Email Input */}
      <div className="flex flex-col">
        <label htmlFor="age" className="mb-2 text-gray-700 font-medium">
          Email
        </label>

        <input
          ref={emailRef}
          id="email"
          type="text"
          className="p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>

      <button
        className="bg-gray-800 text-white text-lg font-semibold py-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
        type="submit"
      >
        Submit
      </button>
      {/* Error Message */}
      {error && <p className="text-red-600 font-medium mt-2">{error}</p>}
      {/* Success Message */}
      {message && <p className="text-green-600 font-medium mt-2">{message}</p>}
    </form>
  );
};

export default SubscribeForm;
