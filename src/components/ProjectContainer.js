const ProjectContainer = ({
  projectTitle,
  imgSrc,
  alt,
  description,
  projectName,
}) => {
  return (
    <div className="project-container">
      <h1 className="project-title">{projectTitle}</h1>
      <div className="project-info-container">
        <img className="preview-image" src={imgSrc} alt={alt} />
        <div className="project-title-description-container">
          <h2 className="project-name">{projectName}</h2>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectContainer;
