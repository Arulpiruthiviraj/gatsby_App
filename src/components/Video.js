import React from 'react';

const Video = ({ video }) => {
  return (
    <div id="video-container">
      <video autoPlay loop muted className="fillWidth">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
    </div>
  );
};

export default Video;
