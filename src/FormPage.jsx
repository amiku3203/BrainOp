import React, { useState, useEffect } from 'react';
import './FormPage.css';

function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const [imageVisible, setImageVisible] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch("https://api.thedogapi.com/v1/images/search");
      const jsonData = await response.json();
      setData(jsonData);
      setImageVisible(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    // Initially hide the image when the component mounts
    setImageVisible(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setImageVisible(false);  
    setName('');
    setEmail('');
    await fetchData();
  };

  return (
    <div className="FormPage">
      {imageVisible && data?.map((dog) => (
        <div key={dog.id}>
          <img src={dog.url} alt="" height="400px" width="400px" />
        </div>
      ))}
      <div className="form-container">
        <h1>Form Page</h1>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Name:
            <input
              className="form-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="form-label">
            Email:
            <input
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button className="form-button" type="submit">
            Fetch Dog Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
