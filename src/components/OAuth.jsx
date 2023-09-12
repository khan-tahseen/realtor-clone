import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router";

export default function OAuth() {

  const navigate = useNavigate()

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('user signed =>', user);

      //check if user not exists
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        });
      }

      navigate('/')
    } catch (error) {
      console.log('error signing =>', error);
      toast.error("Couldn't authorize Google account")
    }
  }
  
  return (
    <button type="button" onClick={onGoogleClick} className="flex w-full items-center justify-center bg-red-600 text-white px-6 py-3 text-sm font-medium uppercase hover:bg-red-700 active:bg-red-800 shadow-md rounded-lg my-6 transition duration-200 ease-linear">
      {" "}
      <FcGoogle className="text-2xl bg-white rounded-full mr-4" />
      Continue With Google
    </button>
  );
}
