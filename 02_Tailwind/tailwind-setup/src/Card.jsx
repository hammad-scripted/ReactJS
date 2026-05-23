import React from 'react';

const Card = (props) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 my-6 w-80 transition-transform transform hover:scale-104 duration-300 shadow-gray-400/50 hover:shadow-gray-400/80 
      hover:shadow-lg

    "
    >
      <img
        src={props.src}
        alt="Description"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-gray-600">{props.description}</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
};

export default Card;
