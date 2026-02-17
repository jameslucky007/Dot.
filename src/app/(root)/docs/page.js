import React from "react";

const page = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 flex justify-center">
      <div className="max-w-5xl w-full space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Task Vault Documentation
          </h1>
          <p className="text-gray-600 mt-4">
            Complete guide to setup, usage, and development workflow.
          </p>
        </div>

        {/* Getting Started */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-600 mb-4">
            Follow the steps below to set up the project locally.
          </p>

          <div className="bg-gray-100 rounded-lg p-4 text-sm font-mono text-gray-800">
            git clone https://github.com/jameslucky007/Task-Vault.git
            <br />
            cd Task-Vault
            <br />
            npm install
            <br />
            npm run dev
          </div>
        </div>

        {/* Core Features */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Core Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Task Management</h3>
              <p className="text-gray-600 text-sm">
                Create, update, delete, and organize tasks efficiently with a clean UI.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Authentication</h3>
              <p className="text-gray-600 text-sm">
                Secure login and signup system with protected routes.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600 text-sm">
                Optimized for mobile, tablet, and desktop devices.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Scalable Architecture</h3>
              <p className="text-gray-600 text-sm">
                Modular structure enabling easy feature expansion.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js (Backend)</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* API Structure */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">API Structure (Example)</h2>

          <div className="bg-gray-100 rounded-lg p-4 text-sm font-mono text-gray-800">
            GET /api/tasks
            <br />
            POST /api/tasks
            <br />
            PUT /api/tasks/:id
            <br />
            DELETE /api/tasks/:id
          </div>
        </div>

        {/* Contribution */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Contribution</h2>
          <p className="text-gray-600">
            Contributions are welcome. Fork the repository, create a feature
            branch, and submit a pull request with a clear explanation of your
            changes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default page;
