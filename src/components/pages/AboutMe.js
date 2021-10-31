import React from "react";
const title = "About me section";
const aboutText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae,\n nam quisquam voluptatum sint ipsam? Totam et est provident aliquam nihil \n aperiam accusantium tempora veritatis magnam, culpa voluptatibus ratione \n ducimus!";

function AboutMe() {
  return (
    <div className="aboutMe">
      {title} <br />
      {aboutText}
    </div>
  );
}

export default AboutMe;
