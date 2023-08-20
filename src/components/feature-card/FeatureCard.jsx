import React from "react";
import "./featureCard.scss";

const FeatureCard = ({ icon, title, content, isUpcoming=false }) => {
  return (
    <div className="feature card">
      {isUpcoming && <div className="upcoming__text">Coming Soon</div>}
      <div className="feature__icon">
        {icon}
      </div>
      <div className="feature__title">
        <h3>{title}</h3>
      </div>
      <div className="feature__content">
        <p>
         {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
