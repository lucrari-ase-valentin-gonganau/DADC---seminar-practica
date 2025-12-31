import { ApiNode } from "@/api";
import { memo, useEffect, useState } from "react";

const ImageShow = ({ id }: { id: number }) => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const loadImage = async (idImage: number) => {
    try {
      const response = await ApiNode().get(`/image/${idImage}`, {
        responseType: "blob",
      });

      const url = URL.createObjectURL(response.data);
      setImageUrl(url);
      setLoading(false);
    } catch (error) {
      console.error("Error loading the image:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await loadImage(id);
    })();

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [id, imageUrl]);

  return (
    <div className="d-flex justify-content-center my-4">
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt="Processed"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      ) : (
        <div className="alert alert-danger">Failed to load image</div>
      )}
    </div>
  );
};

export default memo(ImageShow);
