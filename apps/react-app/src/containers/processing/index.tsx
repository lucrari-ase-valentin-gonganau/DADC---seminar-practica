"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Processing = () => {
  const [countChecking, setCountChecking] = useState(0);
  const searchParams = useSearchParams();
  const messageParam = searchParams.get("message");

  const checkProcessingStatus = () => {
    setCountChecking((prev) => prev + 1);
    console.log("Verificare status procesare...");
    // Implement API call to check processing status
  };

  useEffect(() => {
    // Here you can implement logic to poll the backend for processing status
    // For demonstration, we will just log to console
    const interval = setInterval(() => {
      checkProcessingStatus();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-lg"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div className="card-header text-center bg-primary text-white">
          <h2 className="mb-0">Check result</h2>
        </div>
        <div className="card-body p-4">
          {messageParam && (
            <div className="alert alert-info" role="alert">
              <i className="bi bi-info-circle me-2"></i>
              {messageParam}
            </div>
          )}

          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            If after a long period of time the result is not displayed, please
            reload the page.
            <br />
            <br />
            Numbers of calls to api to check if the image was processed:{" "}
            {countChecking}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Processing;
