import React from "react";
import "./BodySection.css";

function BodySection() {
  return (
    <div className="body-container">
      <div className="text-container">
        <h1>SEPER</h1>
        <p>Software Enginereering Practices Evidence Repository</p>
      </div>

      <div className="footer">
        <div className="authors">
          <p>Jack Judge | Mark Lee | Samuel Kumar</p>
        </div>
      </div>
    </div>
  );
}

export default BodySection;
