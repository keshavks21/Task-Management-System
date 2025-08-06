import React from 'react';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const tasks = []; // replace with useSelector to fetch from redux
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      {/* <TaskList tasks={tasks} /> */}
    </div>
  );
};

export default Dashboard;