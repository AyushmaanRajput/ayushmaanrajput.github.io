import React from "react";

export const Home = () => {
  return (
    <div id="home">
      <img
        src="./Profile_Photo 1.png"
        alt="Profile Image"
        width={200}
        className="home-img"
      />
      <a href="/Resume.pdf" id="resume-link-2" download>
        Resume
      </a>
    </div>
  );
};
