import { ProjectItem, 
         ProjectImg, 
         ProjectDescription, 
         IconsContainer, 
         ProjectTitle,
         StyledIcon,
         Tags,
         Tag 
} from './styles/Project';

import { ProjectInterface } from '../../utils/projectList';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
/* import { ProjectType } from '../../utils/projectList'; */


const Project = ( { img, title, tagList }: ProjectInterface ) => {

  return (
    <ProjectItem>

      <ProjectImg src={ img } objectPosition='center' objectFit='cover' height='225' width='500' layout="responsive"/>

      <ProjectDescription>

        <ProjectTitle>
          { title }
        </ProjectTitle>

        <IconsContainer>
          <Tags>
            {
              tagList.map( (tag, i) => (
                <Tag key={ i }>{ tag }</Tag>
              ))
            }
          </Tags>

          <StyledIcon icon={ faGithub } size='2x'/>
          
        </IconsContainer>
      </ProjectDescription>
    </ProjectItem>
  );
};

export default Project;
