import React from 'react';

const serviceTagStyle = {
  general: { background: 'rgba(56,178,245,0.1)', color: '#38b2f5' },
  billing: { background: 'rgba(240,164,41,0.1)', color: '#f0a429' },
  technical: { background: 'rgba(108,99,255,0.18)', color: '#6c63ff' },
  other: { background: '#2a2f45', color: '#8b90a8' },
};

function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'just now';
  const m = Math.floor(s / 60);
  return m === 1 ? '1 min ago' : `${m} mins ago`;
}

const DisplayQueue = ({ queue, remove, update, toggleStatus }) => {
  const [editingId, setEditingId] = React.useState(null);
  const [editName, setEditName] = React.useState('');

  const startEdit = (customer) => {
    setEditingId(customer.id);
    setEditName(customer.customerName);
  };

  const saveEdit = (id, serviceType) => {
    if (editName.trim()) update(id, editName.trim(), serviceType);
    setEditingId(null);
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
        <span style={{ fontSize: 17, color: '#6c63ff' }}>☰</span>
        <h2 style={{ fontSize: 14, fontWeight: 600 }}>Live queue</h2>
        <span
          style={{
            marginLeft: 'auto',
            background: 'rgba(108,99,255,0.18)',
            color: '#6c63ff',
            border: '1px solid rgba(108,99,255,0.27)',
            borderRadius: 20,
            padding: '2px 10px',
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          {queue.length}
        </span>
      </div>

      <div style={{ padding: 16 }}>
        {queue.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px',
              color: '#555a72',
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12, opacity: 0.4 }}>
              📭
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.5 }}>
              No customers in queue.
              <br />
              Add someone using the form.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              maxHeight: 480,
              overflowY: 'auto',
            }}
          >
            {queue.map((c) => (
              <div
                key={c.id}
                style={{
                  background: '#21253a',
                  borderRadius: 10,
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  border: '1px solid #2e3450',
                  borderLeft: `3px solid ${c.status === 'serving' ? '#22d3a0' : '#f0a429'}`,
                }}
              >
                {/* Ticket number */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: '#2a2f45',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {String(c.num).padStart(2, '0')}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {editingId === c.id ? (
                    <div style={{ display: 'flex', gap: 6 }}>
                      <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === 'Enter' && saveEdit(c.id, c.serviceType)
                        }
                        autoFocus
                        style={{
                          flex: 1,
                          background: '#2a2f45',
                          border: '1px solid #2e3450',
                          borderRadius: 7,
                          padding: '7px 10px',
                          color: '#f0f2ff',
                          fontSize: 12,
                          outline: 'none',
                        }}
                      />
                      <button
                        onClick={() => saveEdit(c.id, c.serviceType)}
                        style={{
                          padding: '7px 12px',
                          borderRadius: 7,
                          background: '#6c63ff',
                          color: '#fff',
                          border: 'none',
                          fontSize: 12,
                          cursor: 'pointer',
                          fontWeight: 500,
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        style={{
                          padding: '7px 12px',
                          borderRadius: 7,
                          background: '#2a2f45',
                          color: '#8b90a8',
                          border: '1px solid #2e3450',
                          fontSize: 12,
                          cursor: 'pointer',
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          marginBottom: 3,
                        }}
                      >
                        {c.customerName}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 10,
                            padding: '2px 8px',
                            borderRadius: 20,
                            fontWeight: 500,
                            ...serviceTagStyle[c.serviceType],
                          }}
                        >
                          {c.serviceType}
                        </span>
                        <span
                          style={{
                            fontSize: 10,
                            color: '#555a72',
                            marginLeft: 'auto',
                          }}
                        >
                          {timeAgo(c.ts)}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Status dot */}
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: c.status === 'serving' ? '#22d3a0' : '#f0a429',
                    boxShadow:
                      c.status === 'serving'
                        ? '0 0 0 3px rgba(34,211,160,0.15)'
                        : 'none',
                  }}
                />

                {/* Actions */}
                <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                  {[
                    {
                      title:
                        c.status === 'pending'
                          ? 'Mark serving'
                          : 'Mark waiting',
                      icon: c.status === 'pending' ? '▶' : '⏸',
                      hoverBg: 'rgba(34,211,160,0.1)',
                      hoverColor: '#22d3a0',
                      onClick: () => toggleStatus(c.id),
                    },
                    {
                      title: 'Edit',
                      icon: '✎',
                      hoverBg: 'rgba(56,178,245,0.1)',
                      hoverColor: '#38b2f5',
                      onClick: () => startEdit(c),
                    },
                    {
                      title: 'Remove',
                      icon: '🗑',
                      hoverBg: 'rgba(255,91,122,0.1)',
                      hoverColor: '#ff5b7a',
                      onClick: () => remove(c.id),
                    },
                  ].map((btn) => (
                    <button
                      key={btn.title}
                      title={btn.title}
                      onClick={btn.onClick}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 7,
                        border: '1px solid #2e3450',
                        background: 'transparent',
                        color: '#8b90a8',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = btn.hoverBg;
                        e.currentTarget.style.color = btn.hoverColor;
                        e.currentTarget.style.borderColor = btn.hoverColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#8b90a8';
                        e.currentTarget.style.borderColor = '#2e3450';
                      }}
                    >
                      {btn.icon}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayQueue;
