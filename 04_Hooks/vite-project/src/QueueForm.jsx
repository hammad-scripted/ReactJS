import React from 'react';

const QueueForm = ({ add, remove, update }) => {
  const [customerName, setCustomerName] = React.useState('');
  const [serviceType, setServiceType] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerName || !serviceType) return;
    console.log('Adding to queue:', customerName, serviceType);
    if (customerName.trim() === '' || serviceType.trim() === '') {
      add(customerName, serviceType);
    }
    setCustomerName('');
    setServiceType('');
  };
  return (
    <div className=" bg-gray-600 p-4 rounded flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Add Customer to Queue</h2>
        <input
          className="   bg-gray-500 text-white p-2 rounded"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        ></input>
        {/* 
        
        */}

        <select
          className="bg-gray-500 text-white p-2 rounded"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="">Select Service Type</option>
          <option value="general">General Inquiry</option>
          <option value="billing">Billing</option>
          <option value="technical">Technical Support</option>
          <option value="other">Other</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Add to Queue
        </button>
      </form>
    </div>
  );
};

export default QueueForm;
