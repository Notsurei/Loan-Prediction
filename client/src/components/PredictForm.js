import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PredictForm() {
  const [formData, setFormdata] = useState({
    Gender: 'Male',
    Married: 'No',
    Dependents: '0',
    Education: 'Graduate',
    Self_Employed: 'No',
    Property_Area: 'Urban',
    ApplicantIncome: '',
    CoapplicantIncome: '',
    LoanAmount: '',
    Loan_Amount_Term: '',
    Credit_History: '1', // Default credit history
    modelType: 'stacking', // Default model type
  });
  const [predictions, setPredictions] = useState(null);

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/predict', formData)
      .then((response) => {
        setPredictions(response.data);
      })
      .catch((error) => {
        toast.error('Some error occurred');
        console.error('Error making prediction', error);
      });
  };

  return (
    <div className='grid grid-cols-2 divide-x '>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 lg:w-96 ml-48'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Gender
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            name='Gender'
            value={formData.Gender}
            onChange={handleChange}
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Married
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            name='Married'
            value={formData.Married}
            onChange={handleChange}
          >
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Dependents
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            name='Dependents'
            value={formData.Dependents}
            onChange={handleChange}
          >
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3+'>3+</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Education
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            name='Education'
            value={formData.Education}
            onChange={handleChange}
          >
            <option value='Graduate'>Graduate</option>
            <option value='Not Graduate'>Not Graduate</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Self Employed
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            name='Self_Employed'
            value={formData.Self_Employed}
            onChange={handleChange}
          >
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Property Area
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            name='Property_Area'
            value={formData.Property_Area}
            onChange={handleChange}
          >
            <option value='Urban'>Urban</option>
            <option value='Semiurban'>Semiurban</option>
            <option value='Rural'>Rural</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Applicant Income
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            type='number'
            name='ApplicantIncome'
            value={formData.ApplicantIncome}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Coapplicant Income
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            type='number'
            name='CoapplicantIncome'
            value={formData.CoapplicantIncome}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Loan Amount
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            type='number'
            name='LoanAmount'
            value={formData.LoanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Loan Amount Term
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            type='number'
            name='Loan_Amount_Term'
            value={formData.Loan_Amount_Term}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Credit History
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            name='Credit_History'
            value={formData.Credit_History}
            onChange={handleChange}
          >
            <option value='1'>Yes</option>
            <option value='0'>No</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Model Type
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gradient-to-r from-pink-400 to-purple-600 leading-tight focus:outline-none focus:shadow-outline'
            name='modelType'
            value={formData.modelType}
            onChange={handleChange}
          >
            <option value='stacking'>Stacking</option>
            <option value='deep_learning'>Deep Learning</option>
          </select>
        </div>
        <div className='mb-6 text-center'>
          <button className='btn btn-primary w-full' type='submit'>
            Predict
          </button>
        </div>
      </form>

      {predictions && (
        <div className='ml-10'>
          <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600 m-10 h-10 text-center'>
            Predictions
          </h2>
          <div className='grid grid-cols-2 divide-x text-center'>
            <p className='m-3'>
              Neural Network Predictions:{' '}
              <span className='font-bold'>
                {predictions.neural_network_predictions}
              </span>
            </p>
            <p className='m-3'>
              Stacking Predictions:{' '}
              <span className='font-bold'>
                {predictions.stacking_predictions}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
You sent
cop vo lai
