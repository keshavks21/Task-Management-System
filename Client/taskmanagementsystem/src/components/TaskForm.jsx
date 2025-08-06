import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className="btn btn-primary">Save Task</button>
    </form>
  );
};

export default TaskForm;
