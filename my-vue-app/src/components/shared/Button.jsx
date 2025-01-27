import React from 'react';

export function Button({ children, type = "button", className, ...props }) {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white px-4 py-2 rounded ${className} hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300`}
      {...props}
    >
      {children}
    </button>
  );
}