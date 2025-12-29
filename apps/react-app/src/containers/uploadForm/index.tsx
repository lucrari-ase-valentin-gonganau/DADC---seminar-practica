"use client";
import { useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";

const UploadForm = () => {
  const [src, setSrc] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [crop, setCrop] = useState<Crop | null>(null);

  const handleCropChange = (newCrop: Crop) => {
    setCrop(newCrop);
  };

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setOriginalFile(file);
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result as string));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!crop || !originalFile) return;

    // create form data to send to backend
    const form = new FormData();
    form.append("file", originalFile);
    form.append("x", String(Math.round(crop.x)));
    form.append("y", String(Math.round(crop.y)));
    form.append("width", String(Math.round(crop.width)));
    form.append("height", String(Math.round(crop.height)));

    const path = process.env.BASE_PATH_URL_JAVALIN || "http://localhost:8081";

    const uploadImageAndProcessIt = axios.create({
      baseURL: path,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    uploadImageAndProcessIt
      .post("/upload-and-process", form)
      .then((response) => {
        window.location.href = "/upload/result?message=" + response.data;
      })
      .catch((error) => {
        alert("Error sending the image. Check the console for details.");
        console.error("Error sending the image:", error);
      });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-lg"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div className="card-header text-center bg-primary text-white">
          <h2 className="mb-0">Upload Image to be Processed</h2>
        </div>
        <div className="card-body p-4">
          <div className="mb-3">
            <label htmlFor="fileInput" className="form-label fw-bold">
              Select Image:
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleSelectFile}
              className="form-control"
            />
          </div>

          {src && (
            <div className="text-center">
              <div className="alert alert-info mb-3" role="alert">
                <i className="bi bi-info-circle me-2"></i>
                <strong>Instructions:</strong> Select the area of the image you
                want to process by dragging a rectangle with the mouse, then
                press the &quot;Submit&quot; button.
              </div>
              <div className="mb-3">
                <ReactCrop crop={crop!} onChange={handleCropChange}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Imagine pentru crop"
                    style={{ maxWidth: "100%" }}
                  />
                </ReactCrop>
              </div>
              {crop && (
                <div className="alert alert-secondary mb-3">
                  <h6 className="mb-2">
                    <i className="bi bi-crop me-2"></i>
                    Coords selected:
                  </h6>
                  <div className="row text-start">
                    <div className="col-6">
                      <small>
                        <strong>X:</strong> {Math.round(crop.x)}px
                        <br />
                        <strong>Y:</strong> {Math.round(crop.y)}px
                      </small>
                    </div>
                    <div className="col-6">
                      <small>
                        <strong>Width:</strong> {Math.round(crop.width)}px
                        <br />
                        <strong>Height:</strong> {Math.round(crop.height)}px
                      </small>
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={handleSubmit}
                className="btn btn-success btn-lg"
                disabled={crop?.height === 0 || crop?.width === 0}
              >
                <i className="bi bi-send me-2"></i>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
