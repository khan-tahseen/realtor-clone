import React, { useState } from 'react';

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
  });
  const { type, name, bedrooms, bathrooms } = formData;

  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center font-bold mt-6">Create a Listing</h1>
      <form>
        <p className="text-lg font-semibold mt-6">Sell/Rent</p>
        <div className="flex">
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
        <p className="text-lg font-semibold mt-6">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength={32}
          minLength={10}
          required
          className="w-full px-6 py-3 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg transition duration-200 ease-linear hover:shadow-lg focus:border-slate-600"
        />
        <div className="flex mt-6 space-x-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min={1}
              max={10}
              className="w-full px-4 py-2 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg transition duration-200 ease-linear hover:shadow-lg focus:border-slate-600"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min={1}
              max={10}
              className="w-full px-4 py-2 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg transition duration-200 ease-linear hover:shadow-lg focus:border-slate-600"
            />
          </div>
        </div>
        <p className="text-lg font-semibold mt-6">Sell/Rent</p>
        <div className="flex">
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
        <p className="text-lg font-semibold mt-6">Sell/Rent</p>
        <div className="flex">
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
