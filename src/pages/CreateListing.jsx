import React, { useState } from 'react';

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: 'rent',
  });
  const { type } = formData;

  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center font-bold mt-6">Create a Listing</h1>
      <form>
        <p className="text-lg font-semibold mt-6">Sell/Rent</p>
        <div className="flex mt-2">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`mr-2 px-6 py-3 uppercase font-medium text-sm shadow-sm rounded-lg hover:shadow-lg focus:shadow-lg transition duration-200 ease-linear w-full ${
              type === 'sale' ? 'bg-white' : 'bg-slate-500 text-white'
            }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`ml-2 px-6 py-3 uppercase font-medium text-sm shadow-sm rounded-lg hover:shadow-lg focus:shadow-lg transition duration-200 ease-linear w-full ${
              type === 'rent' ? 'bg-white' : 'bg-slate-500 text-white'
            }`}
          >
            rent
          </button>
        </div>
      </form>
    </main>
  );
}
