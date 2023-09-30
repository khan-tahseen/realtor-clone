import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function Profile() {
  const navigation = useNavigate();
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  function handleLogout() {
    auth.signOut();
    navigation('/');
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      // Update name in the firestore
      const docRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(docRef, { name });
      toast.success('Profile updated successfully');
    } catch (error) {
      console.log('error while updating profile', error);
      toast.error('Could not update profile');
    }
  }

  function handleChangeText() {
    changeDetails && onSubmit();
    setChangeDetails((prevState) => !prevState);
  }

  function onChangeHandler(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  }

  return (
    <React.Fragment>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center font-bold mt-6">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-4">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetails}
              onChange={onChangeHandler}
              className={`w-full py-2 px-4 text-xl mb-6 rounded-lg ${
                changeDetails && 'bg-red-200 focus:bg-red-200'
              }`}
            />
            <input
              type="email"
              id="email"
              value={email}
              disabled={!changeDetails}
              onChange={onChangeHandler}
              className="w-full py-2 px-4 text-xl mb-6 rounded-lg"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?
                <span
                  onClick={handleChangeText}
                  className="text-red-500 hover:text-red-600 cursor-pointer transition ease-linear duration-200 ml-1"
                >
                  {changeDetails ? 'Apply changes' : 'Edit'}
                </span>
              </p>
              <p
                onClick={handleLogout}
                className="text-blue-500 hover:text-blue-600 transition ease-linear duration-200 cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white uppercase px-6 py-3 text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-150 ease-linear active:bg-blue-700"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FcHome className="mr-2 text-3xl rounded-full bg-red-200 p-1" />
              Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}
