import React from "react";
import YouTubeGrid from "./YouTubeGrid";

const MainYoutube = () => {
    const videos = [
        { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up" },
        { url: "https://www.youtube.com/watch?v=9bZkp7q19f0", title: "PSY - GANGNAM STYLE" },
        { url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ", title: "Marshmello - Alone" },
        { url: "https://www.youtube.com/watch?v=ktvTqknDobU", title: "The Chainsmokers - Closer" },
        { url: "https://www.youtube.com/watch?v=U5FAY6I8uI4", title: "Dua Lipa - Don't Start Now" },
        { url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y", title: "Justin Bieber - Sorry" },
        { url: "https://www.youtube.com/watch?v=OPf0Y6Y9g9I", title: "Bruno Mars - 24K Magic" },
        { url: "https://www.youtube.com/watch?v=YQHsXMglC9A", title: "Adele - Hello" },
        { url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g", title: "Ed Sheeran - Perfect" },
        { url: "https://www.youtube.com/watch?v=6e8S1of4n8I", title: "Post Malone - Circles" },
        { url: "https://www.youtube.com/watch?v=wZ6-7h15V28", title: "Katy Perry - Roar" },
        { url: "https://www.youtube.com/watch?v=ZmN1j2g2J8M", title: "Lady Gaga - Bad Romance" },
    ];
    
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center lg:text-center text-blue-900">
            Our Highlights
          </h1>
      <YouTubeGrid videos={videos} />
      <br />
    </div>
  );
};

export default MainYoutube;
