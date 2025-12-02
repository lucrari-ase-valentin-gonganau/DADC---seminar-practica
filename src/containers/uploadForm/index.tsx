"use client";
import { useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop | null>(null);

  const handleCropChange = (newCrop: Crop) => {
    setCrop(newCrop);
  };

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result as string));
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!crop || !src) return;

    // const coords = {
    //   x: crop.x,
    //   y: crop.y,
    //   width: crop.x + crop.width,
    //   height: crop.y + crop.height,
    // };

    // console.log("coordonate selectedate", coords);
  };

  return (
    <div>
      <h2>Trimite imaginea spre procesare</h2>
      <input type="file" accept="image/*" onChange={handleSelectFile} />

      {src && (
        <div>
          <ReactCrop crop={crop!} onChange={handleCropChange} />
          <button onClick={handleSubmit}>Trimite</button>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
