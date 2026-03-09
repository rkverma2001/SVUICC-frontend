import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdobeAbrocat from "./pages/Productpage/AdobeAbrocat";
import Navbar from "./components/navbar/Navbar";
import SearchPage from "./pages/SearchPage";
import MinorDegree from "./pages/Course/MinorDegree";
import { useAuth } from "./components/auth/AuthContext";
import AuthCard from "./components/auth/AuthCard";
import Dashboard from "./dashboard/Dashboard";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndContidions";
import RefundPolicy from "./pages/RefundPolicy";
import Talent from "./pages/Talent/Talent";

const App = () => {
  const { isAuthOpen } = useAuth();

  return (
    <Router>
      <Navbar />

      {/* Add padding top equal to navbar height */}
      <div className="">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:courseId" element={<AdobeAbrocat />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/courses/:courseId" element={<MinorDegree />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-conditions" element={<TermsAndConditions/>} />
          <Route path="/refund-policy" element={<RefundPolicy/>} />
          <Route path="/talentassessments" element={<Talent/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        {isAuthOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <AuthCard />
        </div>
      )}
      </div>
    </Router>
  );
};

export default App;
