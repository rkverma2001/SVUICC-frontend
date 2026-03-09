import { useState } from "react";
import Footer from "../../components/footer/Footer";
import TalentIntro from "../../components/talentassessments/TalentIntro";
import TalentForm from "../../components/talentassessments/TalentForm";
import SuccessMessage from "../../components/talentassessments/SuccessMessage";

const Talent = () => {

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {!submitted ? (
          <>
            <TalentIntro />
            <TalentForm onSuccess={() => setSubmitted(true)} />
          </>
        ) : (
          <SuccessMessage />
        )}

      </div>

      <Footer />

    </div>
  );
};

export default Talent;