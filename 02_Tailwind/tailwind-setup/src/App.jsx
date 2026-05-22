import React from 'react';
import User from './User';
import Card from './Card';
const App = () => {
  return (
    <div
      className="min-h-screen bg-gray-800 flex
      flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold text-white mb-8">
        Hello, Tailwind CSS!
      </h1>

      <Card
        title="Card Title"
        description="This is a description of the card content."
      />
      <Card
        title="Another Card"
        description="This is another card with different content."
      />
    </div>
  );
};

export default App;
