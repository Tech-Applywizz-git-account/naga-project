
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from './LoginModal'; // Import LoginModal component

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    countryCode: "",
    phone: "",
    email: "",
    promoCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // TODO: Replace with API call for OTP sending/verification
      await new Promise((r) => setTimeout(r, 800));
      alert("OTP sent to your email/phone.");
      navigate("/verify-otp");
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true); // Open the login modal
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Back link */}
      <div className="mx-auto w-full max-w-5xl px-4 pt-6">
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 9H17a1 1 0 110 2H8.414l3.879 3.879a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to home
        </button>
      </div>

      {/* Card */}
      <div className="mx-auto mt-8 w-full max-w-3xl px-4 pb-12">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="p-8 sm:p-12">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">
              Create your account
            </h1>
            <p className="mt-3 text-center text-base text-gray-500">
              Join thousands of successful job seekers
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-transparent bg-indigo-50/60 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none ring-1 ring-indigo-100 focus:ring-2 focus:ring-indigo-300"
                />
              </div>

              {/* Country Code + Phone */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 space-y-2">
                  <label
                    htmlFor="countryCode"
                    className="text-sm font-medium text-gray-700"
                  >
                    Country Code
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-transparent bg-indigo-50/60 px-4 py-3 text-gray-900 outline-none ring-1 ring-indigo-100 focus:ring-2 focus:ring-indigo-300"
                  >
                    <option value="">Code</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                  </select>
                </div>
                <div className="col-span-2 space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full rounded-xl border border-transparent bg-indigo-50/60 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none ring-1 ring-indigo-100 focus:ring-2 focus:ring-indigo-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email ID
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-transparent bg-indigo-50/60 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none ring-1 ring-indigo-100 focus:ring-2 focus:ring-indigo-300"
                />
              </div>

              {/* Promo Code */}
              <div className="space-y-2">
                <label
                  htmlFor="promoCode"
                  className="text-sm font-medium text-gray-700"
                >
                  Promo Code
                </label>
                <input
                  id="promoCode"
                  name="promoCode"
                  type="text"
                  value={form.promoCode}
                  onChange={handleChange}
                  placeholder="Enter promo code (optional)"
                  className="w-full rounded-xl border border-transparent bg-indigo-50/60 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none ring-1 ring-indigo-100 focus:ring-2 focus:ring-indigo-300"
                />
              </div>

              {/* Info Note */}
              <p className="rounded-xl bg-purple-50 px-4 py-3 text-sm text-purple-600">
                You&apos;ll receive an OTP to verify your account.
              </p>

              {/* Error */}
              {error && <p className="text-sm text-red-600">{error}</p>}

              {/* Verify Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:scale-[1.01] transition-transform focus:ring-4 focus:ring-blue-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Verify"}
              </button>

              {/* Footer */}
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={handleLoginClick} // Open login modal
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default SignupPage;
