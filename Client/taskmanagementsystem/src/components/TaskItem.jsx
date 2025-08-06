import React from 'react';

const TaskItem = ({ task }) => (
  <div className="card bg-base-100 shadow p-4">
    <h2 className="font-bold text-lg">{task.title}</h2>
    <p>{task.description}</p>
    <p className="text-sm text-gray-500">Status: {task.status}</p>
  </div>
);

export default TaskItem;