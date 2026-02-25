import React from "react";

interface VideoProps {
  videoUrl: string; // taking video url as prop
}

const SneekPeek: React.FC<VideoProps> = ({ videoUrl }) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/Icon/bgsection.svg')" }}
    >
      {/* Heading */}
      <h1 className="text-white font-semibold text-4xl mb-10">
        Sneek Peek Into Courseware
      </h1>

      {/* YouTube Embed */}
      <iframe
        width="600"
        height="340"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-lg shadow-lg relative"
      ></iframe>
    </div>
  );
};

export default SneekPeek;
