import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => (
  <div className="space-y-2">
    {tasks.map(task => <TaskItem key={task._id} task={task} />)}
  </div>
);

export default TaskList;
