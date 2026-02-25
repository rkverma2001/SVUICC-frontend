import React, { useEffect, useState } from "react";
import axios from "@/services/api";
import { useParams } from "react-router-dom";
import Ratings from "@/components/reviews/Ratings";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";

type TabName = "Certification" | "E-Learning Course";

interface TabContent {
  title: string;
  subtitle: string;
  image: string;
  price: number;
}

interface ProductTabProps {
  tabData: Record<TabName, TabContent>;
  activeTab: TabName;
}

interface DecodedToken {
  userId: string;
  fullName: string;
  email: string;
  mobileNumber: string;
}

const ProductTab: React.FC<ProductTabProps> = ({
  tabData,
  activeTab,
}) => {
  const { courseId } = useParams<{ courseId: string }>();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [voucherCode, setVoucherCode] = useState("");

  useEffect(() => {
    setMessage(null);
    setVoucherCode("");
  }, [activeTab]);

 const handleRedeem = async () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    toast.error("Please login to redeem voucher.");
    return;
  }

  if (!voucherCode.trim()) {
    toast.error("Please enter a valid voucher code.");
    return;
  }

  try {
    setLoading(true);

    const decoded = jwtDecode<DecodedToken>(token);

    await axios.post("/vouchers/redeem", {
  voucherCode: voucherCode.toUpperCase(),
  courseName: tabData[activeTab].title,
  fullName: decoded.fullName,
  email: decoded.email,
  mobileNumber: decoded.mobileNumber,
  userId: decoded.userId,
});

    toast.success("Voucher redeemed successfully!");
    setVoucherCode("");
  } catch (error: any) {
    toast.error(
      error.response?.data?.message || "Invalid or expired voucher"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="py-16">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl flex flex-col lg:flex-row items-center">

        {/* LEFT SIDE - IMAGE */}
        <div className="w-full flex justify-center">
          <img
            src={tabData[activeTab].image}
            alt="Course Logo"
            className="w-72 md:w-80 lg:w-96 rounded-2xl shadow-xl border"
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="w-full flex flex-col">

          {/* Title */}
          
          <h1 className="text-4xl font-semibold gap-10 leading-12 whitespace-pre-line">
              {tabData[activeTab].title}
            </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            {tabData[activeTab].subtitle}
          </p>

          {/* Ratings */}
          <div className="mt-5">
            <Ratings />
          </div>

          {/* Voucher Section */}
          <div className="mt-10 bg-gray-50 p-6 rounded-2xl shadow-sm border">

            <h2 className="text-lg font-semibold mb-4">
              Redeem Code
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter code here"
                value={voucherCode}
                onChange={(e) =>
                  setVoucherCode(e.target.value.toUpperCase())
                }
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 cursor-pointer"
              />

              <button
  onClick={handleRedeem}
  disabled={loading || !localStorage.getItem("authToken")}
  className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? "Redeeming..." : "Redeem"}
</button>
            </div>

            {message && (
              <p
                className={`mt-4 text-sm ${
                  message.includes("success")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductTab;