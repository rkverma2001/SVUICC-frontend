import React, { useState, useEffect } from "react";
import axios from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "./AuthContext";
import "react-toastify/dist/ReactToastify.css";

const AuthCard: React.FC = () => {
  const { closeAuth } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);

  // Countdown Timer
  useEffect(() => {
    let countdown: NodeJS.Timeout;

    if (otpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setResendEnabled(true);
    }

    return () => clearInterval(countdown);
  }, [otpSent, timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SEND OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.dismiss();

    const { fullName, email, phoneNumber } = formData;

    if (!fullName.trim()) {
      toast.error("Full name is required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error("Enter valid 10-digit mobile number");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("/auth/send-otp", {
        mobile: `+91${phoneNumber}`,
      });

      toast.success(res.data.message || "OTP sent successfully");

      setOtpSent(true);
      setTimer(60);
      setResendEnabled(false);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.dismiss();

    if (!formData.otp) {
      toast.error("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("/auth/verify-otp", {
        mobile: `+91${formData.phoneNumber}`,
        otp: formData.otp,
        fullName: formData.fullName,
        email: formData.email,
      });

      const { token, message } = res.data;

      localStorage.setItem("authToken", token);

      toast.success(message || "Login successful");

      setTimeout(() => {
        closeAuth();
        window.location.reload();
      }, 1000);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Invalid or expired OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-11/12 sm:w-96 p-6 rounded-xl shadow-xl relative">

        {/* Close */}
        <button
          onClick={closeAuth}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Login / Sign Up
        </h2>

        <form
          onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
          className="space-y-4"
        >
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            disabled={otpSent}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={otpSent}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Mobile Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={otpSent}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />

          {otpSent && (
            <>
              {/* OTP */}
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                required
              />

              {/* Resend Section */}
              <div className="text-sm text-gray-600 text-center">
                {resendEnabled ? (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="text-green-600 hover:underline cursor-pointer"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <span>Resend OTP in {timer}s</span>
                )}
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0b8743] text-white py-2 rounded-lg hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {otpSent ? "Verify & Login" : "Send OTP"}
          </button>
        </form>

        <ToastContainer autoClose={3000} newestOnTop />
      </div>
    </div>
  );
};

export default AuthCard;