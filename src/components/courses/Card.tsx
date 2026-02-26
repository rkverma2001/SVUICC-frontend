import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api from "@/services/api";

interface CardProps {
  title: string;
  imageSrc: string;
}

interface DecodedToken {
  userId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [voucherCode, setVoucherCode] = useState("");

  useEffect(() => {
    setMessage(null);
    setVoucherCode("");
  }, [title]); // reset when course changes

  const handleRedeem = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setMessage("Please login to redeem voucher.");
      return;
    }

    if (!voucherCode.trim()) {
      setMessage("Please enter a valid voucher code.");
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      const decoded = jwtDecode<DecodedToken>(token);

      await api.post("/vouchers/redeem", {
        voucherCode: voucherCode.toUpperCase(),
        courseName: title,
        fullName: decoded.fullName,
        email: decoded.email,
        mobileNumber: decoded.mobileNumber,
        userId: decoded.userId,
      });

      setMessage("Voucher redeemed successfully!");
      setVoucherCode("");
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Invalid or expired voucher"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      </div>

      <div className="p-6 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Redeem Code</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter code here"
            value={voucherCode}
            onChange={(e) =>
              setVoucherCode(e.target.value.toUpperCase())
            }
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <button
            onClick={handleRedeem}
            disabled={loading}
            className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition disabled:opacity-60"
          >
            {loading ? "Redeeming..." : "Redeem"}
          </button>
        </div>

        {message && (
          <p
            className={`mt-4 text-sm ${
              message.toLowerCase().includes("success")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;