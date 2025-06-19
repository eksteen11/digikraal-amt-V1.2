import React from "react";

const PowerBIEmbed = () => (
  <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-[#23293a] flex items-center justify-center">
    <iframe
      title="Weekly Livestock Report"
      width="100%"
      height="100%"
      src="https://app.powerbi.com/view?r=eyJrIjoiM2EyN2JlODMtYTU1MC00ODQ3LTgxOTEtYzJjNDVkOTI5MzY5IiwidCI6IjBiYjBiZWE1LWZjNjAtNGFlYy05OTQ0LTUzNWEwZjI4YzYxYiJ9"
      frameBorder="0"
      allowFullScreen
      className="w-full h-full"
      style={{ minHeight: 350, border: "none" }}
    />
  </div>
);

export default PowerBIEmbed; 