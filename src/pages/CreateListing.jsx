import React, { useState } from 'react';

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: false,
    regularPrice: '1000',
    discountedPrice: '0',
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange(event) {
    let boolean = null;
    if (event.target.value === 'true') {
      boolean = true;
    } else if (event.target.value === 'false') {
      boolean = false;
    }

    if (event.target.files) {
      setFormData((prevState) => {
        return {
          ...prevState,
          images: event.target.files,
        };
      });
    }

    if (!event.target.files) {
      setFormData((prevState) => {
        return {
          ...prevState,
          [event.target.id]: boolean ?? event.target.value,
        };
      });
    }
  }
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
              type === 'rent' ? 'bg-white' : 'bg-slate-500 text-white'
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
              type === 'sale' ? 'bg-white' : 'bg-slate-500 text-white'
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

        <p className="text-lg font-semibold mt-6">Parking spot</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`mr-2 px-6 py-3 uppercase font-medium text-sm shadow-sm rounded-lg hover:shadow-lg focus:shadow-lg transition duration-200 ease-linear w-full ${
              !parking ? 'bg-white' : 'bg-slate-500 text-white'
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`ml-2 px-6 py-3 uppercase font-medium text-sm shadow-sm rounded-lg hover:shadow-lg focus:shadow-lg transition duration-200 ease-linear w-full ${
              parking ? 'bg-white' : 'bg-slate-500 text-white'
            }`}
          >
            No
          </button>
        </div>

        <p className="text-lg font-semibold mt-6">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`mr-2 px-6 py-3 uppercase font-medium text-sm shadow-sm rounded-lg hover:shadow-lg focus:shadow-lg transition duration-200 ease-linear w-full ${
              !furnished ? 'bg-white' : 'bg-slate-500 text-white'
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`ml-2 px-6 py-3 uppercase font-medium text-sm shadow-sm rounded-lg hover:shadow-lg focus:shadow-lg transition duration-200 ease-linear w-full ${
              furnished ? 'bg-white' : 'bg-slate-500 text-white'
            }`}
          >
            No
          </button>
        </div>

        <p className="text-lg font-semibold mt-6">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-6 py-3 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg transition duration-200 ease-linear hover:shadow-lg focus:border-slate-600"
        />

        <p className="text-lg font-semibold mt-6">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-6 py-3 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg transition duration-200 ease-linear hover:shadow-lg focus:border-slate-600"
        />

        <p className="text-lg font-semibold mt-6">Offer</p>
        <div className="flex">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`mr-2 px-6 py-3 uppercase font-medium text-sm shadow-sm rounded-lg hover:shadow-lg focus:shadow-lg transition duration-200 ease-linear w-full ${
              !offer ? 'bg-white' : 'bg-slate-500 text-white'
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`ml-2 px-6 py-3 uppercase font-medium text-sm shadow-sm rounded-lg hover:shadow-lg focus:shadow-lg transition duration-200 ease-linear w-full ${
              offer ? 'bg-white' : 'bg-slate-500 text-white'
            }`}
          >
            No
          </button>
        </div>

        <div className="flex items-center">
          <div className="mt-6">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex w-80 justify-center items-center">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min={50}
                max={100000}
                required
                className="w-80 px-4 py-2 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg transition duration-200 ease-linear hover:shadow-lg focus:border-slate-600"
              />
              {type === 'rent' && (
                <div className="text-md w-full whitespace-nowrap ml-4">
                  <p>$ / month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="flex items-center">
            <div className="mt-6">
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-80 justify-center items-center">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min={50}
                  max={100000}
                  required={offer}
                  className="w-80 px-4 py-2 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg transition duration-200 ease-linear hover:shadow-lg focus:border-slate-600"
                />
                {type === 'rent' && (
                  <div className="text-md w-full whitespace-nowrap ml-4">
                    <p>$ / month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">The Image will be the cover (max 6)</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .png, .jpeg"
            multiple
            required
            className="w-full px-6 py-3 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg transition duration-200 ease-linear hover:shadow-lg focus:border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="my-8 w-full bg-blue-500 text-white uppercase px-6 py-3 text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-150 ease-linear active:bg-blue-700"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
