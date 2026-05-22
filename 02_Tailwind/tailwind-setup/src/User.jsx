import React from 'react';

const User = (props) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mt-4">User Component</h2>
      <p className="text-gray-300">Name: {props.name}</p>
    </div>
  );
};

export default User;
