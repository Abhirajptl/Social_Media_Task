import { useState } from 'react';
import axios from 'axios';
import { Button } from './shared/Button';

const backendUrl = "http://localhost:5000";

function UserForm() {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("handle", handle);
    images.forEach((image) => formData.append("images", image));

    try {
      await axios.post(`${backendUrl}/submit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus("Submission successful!");
      setName("");
      setHandle("");
      setImages([]);
    } catch (error) {
      console.error(error);
      setStatus("Submission failed. Please try again.");
    }
  };

  return (
    <form className="mb-4 space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Social Media Handle</label>
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Upload Images</label>
        <input
          type="file"
          multiple
          onChange={(e) => setImages([...e.target.files])}
          className="block w-full"
        />
      </div>
      <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </Button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}

export default UserForm;