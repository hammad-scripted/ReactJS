import React from 'react';
import DisplayQueue from './DisplayQueue';

const App = () => {
  const [queue, setQueue] = React.useState([]);

  const addToQueue = (customerName) => {};
  const removeFromQueue = (id) => {};
  const updateQueue = (id, newName) => {};

  return (
    <div className="bg-gray-700 mx-auto max-w-4xl p-4 text-center flex flex-col gap-4 ">
      <h1 className="text-3xl font-bold ">Queue Management System</h1>
      <p>
        Manage your queues efficiently with our Queue Management System. Whether
        it's for a bank, hospital, or any service-oriented business, our system
        helps you streamline the process and improve customer satisfaction. With
        features like real-time updates, ticketing, and analytics, you can
        ensure a smooth experience for both customers and staff.
      </p>

      <main className="flex flex-row gap-2">
        <QueueForm
          add={addToQueue}
          remove={removeFromQueue}
          update={updateQueue}
        />

        <DisplayQueue />
      </main>
    </div>
  );
};

export default App;
