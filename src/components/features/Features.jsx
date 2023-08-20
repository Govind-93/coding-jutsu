import React from "react";

import FeatureCard from "../feature-card/FeatureCard";
import { features } from "../../data";

import "./features.scss";

const Features = () => {
  return (
    <section className="section features" id="features">
      <h1 className="section__title text-center">
        <i className="uil uil-apps icon"></i>
        Features
      </h1>
      <div className="features__container">
        {features.map((feature) => {
          return <FeatureCard {...feature}></FeatureCard>;
        })}
      </div>
    </section>
  );
};

export default Features;
