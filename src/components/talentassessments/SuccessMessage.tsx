const SuccessMessage = () => {

  return (
    <div className="bg-white shadow-lg rounded-xl p-12 text-center max-w-xl mx-auto">

      <h2 className="text-3xl font-semibold text-green-600 mb-6">
        Registration Successful
      </h2>

      <p className="text-gray-700 text-lg">
        Thank you for registering with us!
      </p>

      <p className="text-gray-700 mt-3">
        You will receive your login credentials on your registered email ID within the next 48 hours.
      </p>

      <p className="text-gray-700 mt-3">
        We wish you all the best and encourage you to reach out to us if you need any assistance.
      </p>

    </div>
  );
};

export default SuccessMessage;