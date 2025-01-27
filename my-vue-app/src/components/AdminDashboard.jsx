import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "./shared/Card";

const backendUrl = "http://localhost:5000";

function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);

  // Fetch submissions when the component is mounted
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(`${backendUrl}/submissions`);
        setSubmissions(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchSubmissions();
  }, [submissions]); // Trigger fetch when submissions state changes

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
      {submissions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {submissions.map((submission, index) => (
            <Card key={index} className="p-4 border rounded shadow">
              <CardContent>
                <h3 className="font-bold">{submission.name}</h3>
                <p>@{submission.handle}</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {submission.images.map((image, i) => (
                    <a
                      key={i}
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={image}
                        alt={`Uploaded by ${submission.name}`}
                        className="w-full h-20 object-cover rounded"
                      />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p>No submissions yet.</p>
      )}
    </div>
  );
}

export default AdminDashboard;
