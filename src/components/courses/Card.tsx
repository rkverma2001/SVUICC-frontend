import React, { useEffect, useState } from "react";

interface CardProps {
  title: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc }) => {
  const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [voucherCode, setVoucherCode] = useState("");
  
    useEffect(() => {
      setMessage(null);
      setVoucherCode("");
    },);
  
    const handleRedeem = async () => {
      if (!voucherCode.trim()) {
        setMessage("Please enter a valid voucher code.");
        return;
      }
  
      try {
        setLoading(true);
        setMessage(null);
  
        // await api.post(`/voucher/redeem/${courseId}`, { code: voucherCode });
  
        setMessage("Voucher redeemed successfully!");
      } catch (error) {
        setMessage("Invalid or expired voucher code.");
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
        <h2 className="text-lg font-bold text-gray-800">
          {title}
        </h2>
      </div>
      <div className="p-6 rounded-xl shadow-sm border">

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
                disabled={loading}
                className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition disabled:opacity-60"
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
  );
};

export default Card;