import Projects from "./Projects";
import { MainContainer, Title, SubTitle } from './styles/ProjectSection';

const ProjectSection = () => {

  return(
    <MainContainer>

      <Title> Check my recent projects </Title>
      <SubTitle> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </SubTitle>

      <Projects />

    </MainContainer>
  )
};

export default ProjectSection;
