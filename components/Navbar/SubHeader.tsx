import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  margin-top: 9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.a`
  color: #1a1d20;
  font-size: 1.4rem;
  font-weight: 600;
  color: #495057;
`

const StyledIcon = styled(FontAwesomeIcon)`
  filter: invert(28%) sepia(13%) saturate(407%) hue-rotate(169deg) brightness(96%) contrast(86%);

  &:hover {
    cursor: pointer;
    filter: invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg) brightness(96%) contrast(104%);
  }
`

const ContainerRightArrow = styled.div`
  padding-top: 3px;
  padding-left: 10px;
`

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  
  &:hover > ${ Title } {
    color: #212529;
  }

  &:hover > ${ ContainerRightArrow } > ${ StyledIcon } {

    filter: invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg) brightness(96%) contrast(104%);
    margin-left: 5px;
    transition: margin 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

`

const ContainerIcons = styled.div`
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 18px;
`

const SubHeader = () => {
  return (
    <Container>
      
      <ContainerDescription>
        <Title>My Social Medias</Title>
        <ContainerRightArrow> <StyledIcon icon={ faChevronRight } size='1x' />  </ContainerRightArrow>
      </ContainerDescription>

      <ContainerIcons>
        <StyledIcon icon={ faFacebook } /> 
        <StyledIcon icon={ faTwitter } /> 
        <StyledIcon icon={ faDiscord } /> 
        <StyledIcon icon={ faInstagram } /> 
      </ContainerIcons>
    </Container>
  )
};

export default SubHeader;
