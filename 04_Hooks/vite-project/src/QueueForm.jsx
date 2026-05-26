import React from 'react';

const serviceOptions = [
  { value: 'general', label: 'General', icon: '💬' },
  { value: 'billing', label: 'Billing', icon: '🧾' },
  { value: 'technical', label: 'Technical', icon: '🔧' },
  { value: 'other', label: 'Other', icon: '···' },
];

const QueueForm = ({ add }) => {
  const [customerName, setCustomerName] = React.useState('');
  const [serviceType, setServiceType] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = () => {
    if (!customerName.trim()) {
      setError('Please enter a customer name.');
      return;
    }
    if (!serviceType) {
      setError('Please select a service type.');
      return;
    }
    setError('');
    add(customerName.trim(), serviceType);
    setCustomerName('');
    setServiceType('');
  };

  return (
    <div
      style={{
        background: '#1a1d27',
        border: '1px solid #2e3450',
        borderRadius: 14,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '16px 18px',
          borderBottom: '1px solid #2e3450',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span style={{ fontSize: 17, color: '#6c63ff' }}>＋</span>
        <h2 style={{ fontSize: 14, fontWeight: 600 }}>Add customer</h2>
      </div>

      <div
        style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {/* Name input */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: 11,
              color: '#555a72',
              textTransform: 'uppercase',
              letterSpacing: '.6px',
              marginBottom: 6,
            }}
          >
            Customer name
          </label>
          <input
            style={{
              width: '100%',
              background: '#21253a',
              border: '1px solid #2e3450',
              borderRadius: 10,
              padding: '10px 12px',
              color: '#f0f2ff',
              fontSize: 13,
              outline: 'none',
              boxSizing: 'border-box',
            }}
            placeholder="Enter full name…"
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value);
              setError('');
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
        </div>

        {/* Service type pills */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: 11,
              color: '#555a72',
              textTransform: 'uppercase',
              letterSpacing: '.6px',
              marginBottom: 6,
            }}
          >
            Service type
          </label>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}
          >
            {serviceOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setServiceType(opt.value);
                  setError('');
                }}
                style={{
                  padding: '8px 10px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontSize: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  transition: 'all .15s',
                  background:
                    serviceType === opt.value
                      ? 'rgba(108,99,255,0.18)'
                      : '#21253a',
                  border:
                    serviceType === opt.value
                      ? '1px solid rgba(108,99,255,0.44)'
                      : '1px solid #2e3450',
                  color: serviceType === opt.value ? '#6c63ff' : '#8b90a8',
                  fontWeight: serviceType === opt.value ? 500 : 400,
                }}
              >
                <span>{opt.icon}</span> {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          style={{
            background: '#6c63ff',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            padding: 11,
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          + Add to queue
        </button>

        {error && (
          <p
            style={{
              fontSize: 12,
              color: '#ff5b7a',
              textAlign: 'center',
              margin: 0,
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default QueueForm;
