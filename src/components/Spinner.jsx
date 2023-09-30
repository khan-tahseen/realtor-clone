import React from 'react';
import spinner from '../assets/svg/Spinner.svg';

export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-25 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-50">
      <img src={spinner} alt="Loading..." className="h-28" />
    </div>
  );
}
