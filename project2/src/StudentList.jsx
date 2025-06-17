import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required.';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required.';
    if (!formData.dob.trim()) {
      errs.dob = 'Date of birth is required.';
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.dob)) {
      errs.dob = 'Date format must be YYYY-MM-DD.';
    }
    if (!formData.grade.trim()) {
      errs.grade = 'Grade is required.';
    } else if (isNaN(formData.grade) || +formData.grade < 1 || +formData.grade > 12) {
      errs.grade = 'Grade must be a number between 1 and 12.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddStudent(formData);
      setFormData({ firstName: '', lastName: '', dob: '', grade: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Add New Student</h2>

      {['firstName', 'lastName', 'dob', 'grade'].map(field => (
        <div className="mb-4" key={field}>
          <label className="block text-gray-700 font-medium mb-1 capitalize">
            {field === 'dob' ? 'Date of Birth (YYYY-MM-DD)' : field.replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            name={field}
            type={field === 'dob' ? 'date' : 'text'}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Student
      </button>
    </form>
  );
};

export default AddStudentForm;
