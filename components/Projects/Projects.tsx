
import { projectList, ProjectInterface } from '../../utils/projectList';
import Project from './Project';
import { ProjectsContainer } from './styles/Projects';

const Projects = () => {

  return (
    <ProjectsContainer>
      
      {
        projectList.map( ( project: ProjectInterface ) => (
          <Project  key={ project.id } { ...project }  />
        ))
      }
      
    </ProjectsContainer>
  )
};

export default Projects;
