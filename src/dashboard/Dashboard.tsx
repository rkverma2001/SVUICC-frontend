import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from ".././services/api";
import Footer from ".././components/footer/Footer";

/* =========================
   Types
========================= */

interface DecodedToken {
  fullName: string;
  email: string;
  mobileNumber: string;
  exp?: number;
  iat?: number;
}

interface Order {
  _id: string;
  courseName: string;
  paymentStatus: string;
}

interface OrdersResponse {
  success: boolean;
  orders: Order[];
}

/* =========================
   Component
========================= */

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [purchasedCourses, setPurchasedCourses] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // 🔥 use same key as login

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      // 1️⃣ Decode JWT safely
      const decoded = jwtDecode<DecodedToken>(token);
      setUser(decoded);

      // 2️⃣ Fetch Orders
      fetchOrders(token);
    } catch (err) {
      console.error("Invalid token", err);
      setLoading(false);
    }
  }, []);

  /* =========================
     Fetch Orders
  ========================= */

  const fetchOrders = async (token: string): Promise<void> => {
    try {
      const { data } = await axios.get<OrdersResponse>(
        "/orders/myorders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data?.success) {
        const paidOrders = data.orders.filter(
          (order) => order.paymentStatus === "SUCCESS"
        );

        setPurchasedCourses(paidOrders);
      } else {
        setPurchasedCourses([]);
      }
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     UI
  ========================= */

  return (
    <div className="bg-white min-h-screen">

      {/* Banner */}
      <div className="hidden md:block relative w-full mt-12 overflow-hidden">
        <img
          src="https://etrain.blr1.cdn.digitaloceanspaces.com/dstibm/images/banners/dashbanner.png"
          alt="Banner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 bg-opacity-50 p-6 md:p-8">
          <h1 className="text-white text-3xl font-bold mt-6">
            Welcome, {user?.fullName || "Student"}
          </h1>
          <h2 className="text-white text-xl mt-4 border-t-2 border-white pt-2">
            Explore Your Enrolled Courses
          </h2>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-10 mb-12 text-center">
        My Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-1/2 mx-auto gap-8 mb-32">
        
        {/* Profile Card */}
        {user && (
          <div className="bg-gray-100 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Profile Details
            </h2>

            <p className="mb-2">
              <span className="font-medium">Name:</span> {user.fullName}
            </p>

            <p className="mb-2 break-words">
              <span className="font-medium">Email:</span> {user.email}
            </p>

            <p className="mb-2">
              <span className="font-medium">Mobile:</span>{" "}
              {user.mobileNumber}
            </p>

            <p className="text-green-600 font-semibold mt-4">
              For edits, kindly contact support@svuicc.com.
            </p>
          </div>
        )}

        {/* Enrollment Card */}
        <div className="bg-gray-100 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            My Courses
          </h2>

          {loading ? (
            <p>Loading courses...</p>
          ) : purchasedCourses.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
              {purchasedCourses.map((course) => (
                <li
                  key={course._id}
                  className="text-green-700 font-medium"
                >
                  {course.courseName}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-600 font-semibold">
              You have not purchased any course
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-36">
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;