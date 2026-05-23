import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center my-8">Counter App</h1>
      <h2 className="text-6xl font-bold mb-8">{count}</h2>

      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-black px-4 py-2 rounded"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-black px-4 py-2 rounded"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Decrement
        </button>

        <button
          className="bg-gray-500 text-black px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>

      <div className="mt-8">
        <input
          className="border border-black rounded py-2 px-4"
          placeholder="Enter a value..."
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
      </div>
    </div>
  );
};

export default App;
