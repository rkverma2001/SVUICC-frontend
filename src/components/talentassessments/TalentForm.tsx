import { useState } from "react";
import axios from "../../services/api";

interface Props {
  onSuccess: () => void;
}

const TalentForm = ({ onSuccess }: Props) => {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    redeemCode: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const res = await axios.post(
        "/talent/register",
        form
      );

      if (res.data.success) {
        onSuccess();
      }

    } catch (err: any) {

      setError(
        err?.response?.data?.message || "Something went wrong"
      );

    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-8 max-w-xl">

      <h2 className="text-2xl font-semibold mb-6">
        Register for Talent Assessment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded">
            {error}
          </div>
        )}

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="redeemCode"
          placeholder="Redeem Code"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2d79c5] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Registering..." : "Register"}
        </button>

      </form>

    </div>
  );
};

export default TalentForm;