import React, { useState } from "react";

const YouTubeCard = ({ videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from the provided YouTube link
  const videoId = videoUrl.split("v=")[1]?.split("&")[0];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "300px", // Limit the card width for responsiveness
        padding: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "10px",
        margin: "10px",
        cursor: "pointer",
        textAlign: "center",
        transition: "transform 0.3s ease-in-out",
        position: "relative", // For positioning the play icon
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {isPlaying ? (
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px" }}
        />
      ) : (
        <>
          <img
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            onClick={() => setIsPlaying(true)}
          />
          {/* Play button overlay */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => setIsPlaying(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="40px"
              height="40px"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </>
      )}
      <h2 style={{ fontSize: "16px", fontWeight: "600", marginTop: "10px" }}>
        {title}
      </h2>
    </div>
  );
};

export default YouTubeCard;
