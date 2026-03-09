import React from 'react';

const Support = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Support</h2>
      <p className="mb-2">If you need assistance, please reach out to our support team:</p>
      <p className="mb-1">
        Email: 
        <a href="mailto:support@example.com" className="text-blue-500 hover:underline"> support@example.com</a>
      </p>
      <p>
        Phone: 
        <a href="tel:+123456789" className="text-blue-500 hover:underline"> +1 234-567-89</a>
      </p>
    </div>
  );
};

export default Support;
