import React from "react";
import Header from "../components/Header";
import ProjectContainer from "../components/ProjectContainer";
import cafeImage from "../images/superbroasts.png";
import bootStrapImage from "../images/bootstrapdemo.png";
import landingPage from "../images/landingpage.png";
import responsiveDesign from "../images/responsivedesign.png";

const HomePage = () => {
  return (
    <div>
      <Header
        link1={"Most Recent Project"}
        link2={"Intermediate Projects"}
        link3={"JavaScript Apps"}
      />
      <ProjectContainer
        projectTitle={"My Latest Project | Cafe Page"}
        alt={"A Preview of my Cafe Page"}
        imgSrc={cafeImage}
        description={
          "My latest and most involved project, a sample page for a coffee shop / cafe, can be found here."
        }
      />
      <ProjectContainer
        projectTitle={"Intermediate Projects"}
        projectName={"Bootstrap Demo"}
        alt={"A preview of my bootstrap demo"}
        imgSrc={bootStrapImage}
        description={
          "In my bootstrap demo you'll find the first project I created using bootsrap. Through completing this project I gained a solid, but basic understanding of the bootsrap grid system as well as many other styling aspects of bootsrap by creating a bootcamp page."
        }
      />
      <ProjectContainer
        projectName={"Landing / Sign Up Page"}
        alt={"A preview of my landing page"}
        imgSrc={landingPage}
        description={
          "This project was primarily about creating and basic styling of forms. There is some degree of mobile compatibility, but it isn't pretty!"
        }
      />
      <ProjectContainer
        projectName={"Responsive Design Without Bootstrap"}
        alt={"A preview of my responsive design page"}
        imgSrc={responsiveDesign}
        description={
          "This project is about making a simple mobile first design using just CSS. Please view the project here."
        }
      />
    </div>
  );
};

export default HomePage;
