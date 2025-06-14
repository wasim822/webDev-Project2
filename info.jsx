import { useState } from "react";

const Info = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dob: "",
    grade: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with:", formData);
    try {
      const response = await fetch("http://localhost:5500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("A student has been added successfully");
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          dob: "",
          grade: "",
        });
      } else {
        const errorText = await response.text();
        console.error("Server responded with an error:", errorText);
        setMessage("Student registration failed");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setMessage("Student registration failed");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form className="" action="" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="grade">Current Grade:</label>
          <input type="number" id="grade" name="grade" min="1" max="12" value={formData.grade} onChange={handleInputChange} required />
        </div>
        <button type="submit">Add Student</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};
export default Info;

