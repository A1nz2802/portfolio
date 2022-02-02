import Image from 'next/image';
import styled from 'styled-components';

import project1 from '../../public/static/background2-sm.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectsContainer = styled.div`
margin-top: 30px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-color: transparent;

width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const ProjectItem = styled.div`
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-color: transparent;
display: block;
width: 100%;
background-color: #fff;

`

const ProjectTitle = styled.p`
padding-top: 15px;
padding-left: 15px;
padding-right: 15px;
padding-bottom: 10px;
font-family: 'poppins', sans-serif;
font-size: 1.5rem;
font-weight: 600;

`
const ProjectImg = styled(Image)`
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-color: transparent;

`

const ProjectDescription = styled.div`

`

const ProjectIcons = styled.span`

`

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <ProjectItem>
        <ProjectImg src={ project1 } objectPosition='center' objectFit='cover' height='225' width='500' layout="responsive"/>
        <ProjectDescription>

          <ProjectTitle>
            Amazon Clone with React!
          </ProjectTitle>
          <ProjectIcons>
            <FontAwesomeIcon icon={ faGithub } />
          </ProjectIcons>
        </ProjectDescription>
      </ProjectItem>
    </ProjectsContainer>
  )
};

export default ProjectsSection;
