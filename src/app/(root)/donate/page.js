import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 flex justify-center">
      <div className="max-w-4xl w-full space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Support Task Vault
          </h1>
          <p className="text-gray-600 mt-4">
            Help us improve, maintain, and expand the platform.
          </p>
        </div>

        {/* Why Donate */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Why Your Support Matters</h2>
          <p className="text-gray-600 leading-relaxed">
            Donations help cover server costs, development time, feature
            improvements, security updates, and long-term scalability.
            Every contribution directly supports continuous improvement.
          </p>
        </div>

        {/* Where Funds Go */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Where Funds Are Used</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Hosting, database management, domain renewal, and cloud services.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-gray-600 text-sm">
                Feature expansion, UI improvements, performance optimization.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Security</h3>
              <p className="text-gray-600 text-sm">
                Continuous security monitoring, patching, and compliance updates.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Community Growth</h3>
              <p className="text-gray-600 text-sm">
                Documentation, tutorials, and contributor support.
              </p>
            </div>
          </div>
        </div>

        {/* Donation Options */}
        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Donate Securely</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
            >
              Donate via UPI
            </a>

            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:opacity-90 transition"
            >
              Donate via PayPal
            </a>

            <a
              href="#"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:opacity-90 transition"
            >
              Sponsor on GitHub
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            All transactions are handled securely through official payment gateways.
          </p>
        </div>

      </div>
    </section>
  );
};

export default page;
