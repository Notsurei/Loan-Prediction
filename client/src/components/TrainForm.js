import React, { useState } from 'react';
import axios from 'axios';

export default function TrainForm() {
  const [filePath, setFilePath] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFilePath(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/train', { file_path: filePath })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error training model', error);
        setMessage('Error training model');
      });
  };
  return (
    <div className='flex items-center justify-center bg-transparent'>
    <form className="bg-white e shadow-md rounded px-8 pt-6 pb-8 mb-6 size-max w-96" onSubmit={handleSubmit}>
    <h1 className='text-center text-gray-700'>Train Model</h1>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">CSV File Path:</label>
        <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" type='text' value={filePath} onChange={handleChange} />
      </div>
      <button className="btn btn-primary w-full" type="submit">Train</button>
    </form>
    {message && <p>{message}</p>}
  </div>
  )
}
