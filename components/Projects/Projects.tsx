import ProjectsSection from "./ProjectsSection";
import { MainContainer, Title, SubTitle } from '../Projects/styles/Projects';

const Projects = () => {

  const ProjectArr = {
    title: 'Amazon Clone',
    icons: ['nextjs', 'github'],
    img: 'ruta here',
  }

  return(
    <MainContainer>

      <Title> Check my recent projects </Title>
      <SubTitle> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </SubTitle>

      <ProjectsSection />

    </MainContainer>
  )
};

export default Projects;
