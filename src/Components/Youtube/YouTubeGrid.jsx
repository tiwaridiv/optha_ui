import React from "react";
import YouTubeCard from "./YouTubeCard";

const YouTubeGrid = ({ videos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {videos.map((video, index) => (
        <YouTubeCard key={index} videoUrl={video.url} title={video.title} />
      ))}
    </div>
  );
};

export default YouTubeGrid;
