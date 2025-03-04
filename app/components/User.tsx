import React from "react";

function User() {
  return (
    <div className="bg-white dark:bg-card-bg-dark p-4 rounded-2xl shadow-md flex flex-col items-center">
      <img
        src="/tipa.jpg"
        alt="User"
        className="w-32 h-32 object-cover rounded-xl mb-2"
      />
      <p className="text-gray-800 font-semibold">NAME:</p>
      <p className="text-gray-600 text-sm">35</p>
      <p className="text-gray-800 font-semibold">AGE:</p>
      <p className="text-gray-600 text-sm">Married, 2 Kids</p>
      <p className="text-gray-800 font-semibold">EDUCATION:</p>
      <p className="text-gray-600 text-sm">University of Calgary</p>
      <p className="text-gray-800 font-semibold">LOCATION:</p>
      <p className="text-gray-600 text-sm">Calgary, Alberta</p>
      <p className="text-gray-800 font-semibold">JOB:</p>
      <p className="text-gray-600 text-sm">Family Physician</p>
      <p className="text-gray-800 font-semibold">HOBBIES:</p>
      <p className="text-gray-600 text-sm">Hiking and dancing</p>
    </div>
  );
}

export default User;
