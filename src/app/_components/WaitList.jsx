"use client";
import { useState } from "react";

const WaitlistSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending the data to an API
    console.log({ name, email });
    setSubmitted(true);
  };

  return (
    <section className="flex items-center justify-center py-16 px-4 bg-gray-900 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl">
        {/* Left Content */}
        <div className="text-white space-y-4 ">
          <h2 className="text-3xl md:text-5xl font-bold">Join the waitlist</h2>
          <p className="text-lg">
            Join the waitlist and we’ll contact you for access.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Get early access
          </h3>

          {submitted ? (
            <div className="text-center">
              <h4 className="text-2xl font-bold text-green-600 pt-2 pb-4">
                Thank you for joining!
              </h4>
              <p className="text-center text-md text-gray-500">
                We’ll get in touch with you{" "}
                <span className="font-semibold">soon</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-3 px-6 bg-gray-900 text-white font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-xl"
                >
                  Join waitlist →
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                We’ll get in touch with you{" "}
                <span className="font-semibold">soon</span>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
