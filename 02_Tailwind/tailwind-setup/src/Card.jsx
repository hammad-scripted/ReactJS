import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-6">
      <img src="path/to/image.jpg" alt="Description" />
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-gray-600">{props.description}</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
};

export default Card;
