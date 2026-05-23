import React from 'react';

const Todo = () => {
  const [task, setTask] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center my-8">Todo App</h1>
      <div className="flex space-x-4">
        <input
          className="border border-gray-300 rounded py-2 px-4 w-64 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-black px-4 py-2 rounded"
          onClick={() => {
            setTodos([...todos, task]);
            setTask('');
          }}
        >
          Add Task
        </button>
      </div>
      <div className="mt-8">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-300 rounded py-2 px-4 mb-2 w-64"
          >
            {' '}
            {todo}
            <button
              onClick={() => setTodos(todos.filter((t, i) => i !== index))}
              className="bg-red-500 text-white px-2 py-1 rounded ml-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
