import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

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
