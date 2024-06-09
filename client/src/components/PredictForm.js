import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PredictForm() {
  const [formData, setFormdata] = useState({
    ApplicantIncome: "",
    CoapplicantIncome: "",
    LoanAmount: "",
    Loan_Amount_Term: "",
    Gender: "Male",
    Married: "No",
    Dependents: "0",
    Education: "Graduate",
    Self_Employed: "No",
    Property_Area: "Urban",
  });
  const [predictions, setPredictions] = useState(null);

  const sendRequest = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/predict", formData)
      .then((response) => {
        setPredictions(response.data);
      })
      .catch((error) => {
        toast.error("Some error occured");
        console.error("Error making prediction", error);
      });
  };

  const handleSubmit = async () => {
    const data = await sendRequest();
    if (!data) {
      toast.error("No data found");
    }
  };
  return (
    <div className="flex items-center justify-center bg-transparent  flex-col divide-y">
      <form
        className="bg-white e shadow-md rounded px-8 pt-6 pb-8 mb-6 size-max w-96"
        onSubmit={handleSubmit}
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Applicant income
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name='ApplicantIncome'
          onChange={(e) => setFormdata({...formData, ApplicantIncome: e.target.value})}
          required
        ></input>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Coapplicant income
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name='CoapplicantIncome'
          onChange={(e) => setFormdata({...formData, CoapplicantIncome: e.target.value})}
          required
        ></input>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Loan Amount
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name='LoanAmount'
          onChange={(e) => setFormdata({...formData, LoanAmount: e.target.value})}
          required
        ></input>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Loan Amount Term
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name='Loan_Amount_Term'
          onChange={(e) => setFormdata({...formData, Loan_Amount_Term: e.target.value})}
          required
        ></input>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gender
        </label>
        <select name="Gender" className="w-full py-2 px-3 text-white-700">
          <option value='Male' onChange={(e) => setFormdata({...formData, Gender: e.target.value})}>Male</option>
          <option value='Female' onChange={(e) => setFormdata({...formData, Gender: e.target.value})}>Female</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Married
        </label>
        <select name="Married" className="w-full py-2 px-3 text-white-700">
          <option value='Yes' onChange={(e) => setFormdata({...formData, Married: e.target.value})}>Yes</option>
          <option value='No' onChange={(e) => setFormdata({...formData, Married: e.target.value})}>No</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Dependents
        </label>
        <select name="Married" className="w-full py-2 px-3 text-white-700">
          <option value='0' onChange={(e) => setFormdata({...formData, Dependents: e.target.value})}>0</option>
          <option value='1' onChange={(e) => setFormdata({...formData, Dependents: e.target.value})}>1</option>
          <option value='2' onChange={(e) => setFormdata({...formData, Dependents: e.target.value})}>2</option>
          <option value='3+' onChange={(e) => setFormdata({...formData, Dependents: e.target.value})}>3+</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Education
        </label>
        <select name="Education" className="w-full py-2 px-3 text-white-700">
          <option value='Graduate' onChange={(e) => setFormdata({...formData, Education: e.target.value})}>Graduate</option>
          <option value='Not Graduate' onChange={(e) => setFormdata({...formData, Education: e.target.value})}>Not Graduate</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Self Employed
        </label>
        <select name="Self_Employed" className="w-full py-2 px-3 text-white-700">
          <option value='Yes' onChange={(e) => setFormdata({...formData, Self_Employed: e.target.value})}>Yes</option>
          <option value='No' onChange={(e) => setFormdata({...formData, Self_Employed: e.target.value})}>No</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Property Area
        </label>
        <select name="Property Area" className="w-full py-2 px-3 text-white-700">
          <option value='Urban' onChange={(e) => setFormdata({...formData, Property_Area: e.target.value})}>Urban</option>
          <option value='Semiurban' onChange={(e) => setFormdata({...formData, Property_Area: e.target.value})}>Semiurban</option>
          <option value='Rural' onChange={(e) => setFormdata({...formData, Property_Area: e.target.value})}>Rural</option>
        </select>
        <div>
          <button className="btn btn-primary w-full" type="submit">Predict</button>
        </div>
      </form>
      {predictions && (
        <div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600 m-10 h-10 text-center">Predictions</h2>
          
          <div className="grid grid-cols-2 divide-x text-center">
          <p className="m-3">
            Neural Network Predictions: 
            <p className = 'm-3'> {predictions.neural_network_predictions}</p>
          </p>
          <p className="m-3">Stacking Predictions: 
            <p className = 'm-3'>{predictions.stacking_predictions}</p>
          </p>
          </div>
        </div>
      )}
    </div>
  );
}
