import React from 'react';
import DisplayQueue from './DisplayQueue';
import QueueForm from './QueueForm';
const App = () => {
  const [queue, setQueue] = React.useState([]);
  const [counter, setCounter] = React.useState(1);

  const addToQueue = (customerName, serviceType) => {
    setQueue((prev) => [
      ...prev,
      {
        customerName,
        id: Date.now(),
        num: counter,
        status: 'pending',
        serviceType,
        ts: Date.now(),
      },
    ]);
    setCounter((c) => c + 1);
  };

  const removeFromQueue = (id) => {
    setQueue((prev) => prev.filter((c) => c.id !== id));
  };

  const updateQueue = (id, newName, serviceType) => {
    setQueue((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, customerName: newName, serviceType } : c,
      ),
    );
  };

  const toggleStatus = (id) => {
    setQueue((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === 'pending' ? 'serving' : 'pending' }
          : c,
      ),
    );
  };

  const total = queue.length;
  const waiting = queue.filter((c) => c.status === 'pending').length;
  const serving = queue.filter((c) => c.status === 'serving').length;

  return (
    <div
      style={{
        background: '#0f1117',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#f0f2ff',
      }}
    >
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '24px 16px' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 32,
            padding: '32px 24px',
            background: '#1a1d27',
            borderRadius: 14,
            border: '1px solid #2e3450',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(108,99,255,0.18)',
              border: '1px solid rgba(108,99,255,0.27)',
              borderRadius: 20,
              padding: '4px 12px',
              fontSize: 12,
              color: '#6c63ff',
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                background: '#6c63ff',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            System Active
          </div>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: -0.5,
              marginBottom: 8,
            }}
          >
            Queue Management System
          </h1>
          <p
            style={{
              fontSize: 13,
              color: '#8b90a8',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Streamline customer flow with real-time queue tracking, service
            categorization, and instant status updates.
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            marginBottom: 24,
          }}
        >
          {[
            {
              label: 'Total',
              value: total,
              color: '#6c63ff',
              bg: 'rgba(108,99,255,0.18)',
              icon: '👥',
            },
            {
              label: 'Waiting',
              value: waiting,
              color: '#f0a429',
              bg: 'rgba(240,164,41,0.1)',
              icon: '⏳',
            },
            {
              label: 'Serving',
              value: serving,
              color: '#22d3a0',
              bg: 'rgba(34,211,160,0.1)',
              icon: '✅',
            },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: '#1a1d27',
                border: '1px solid #2e3450',
                borderRadius: 10,
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: s.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: '#555a72',
                    textTransform: 'uppercase',
                    letterSpacing: '.6px',
                    marginBottom: 2,
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: 22, fontWeight: 600 }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: 16,
            alignItems: 'start',
          }}
        >
          <QueueForm add={addToQueue} />
          <DisplayQueue
            queue={queue}
            remove={removeFromQueue}
            update={updateQueue}
            toggleStatus={toggleStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
