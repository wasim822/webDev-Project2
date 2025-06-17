import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch student data');
        return response.json();
      })
      .then(data => setStudents(data))
      .catch(error => console.error(error));
  }, []);

  const handleAddStudent = (newStudent) => {
    setStudents(prev => [...prev, newStudent]);
  };

  return (
    <>
      <Navbar />
      <main className="p-4">
        <AddStudentForm onAddStudent={handleAddStudent} />
        <StudentList students={students} />
      </main>
      <Footer />
    </>
  );
};

export default App;
