import Image from 'next/image';
import styled from 'styled-components';

import { mediaQueries } from '../../utils/breakPoints';

import backgroundXl from '../../public/static/background4-sm.jpg';
import Projects from '../Projects/Projects';

const ContainerMainSection = styled.section`
  /* position: absolute; */
  
  width: 100%;
`

const BackgroundContainer = styled.div`
  position: relative;
  height: 100vw;
  opacity: 0.90;
  width: 100%;
  
  
  background: url('static/background4-sm.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;

  ${ mediaQueries('xs')} {
  
  height: 130vw;
  
  }
  

  ${ mediaQueries('sm')} {
  
  height: 110vw;
  
  }

  ${ mediaQueries('md')} {
  
  height: 90vw;
  
  }

  ${ mediaQueries('lg')} {
  
  background: url('static/background4-xl.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vw;

  }
`

const BackgroundGradient = styled.div`
  width: inherit;
  height: inherit;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0.7;
  z-index: -1;
`

const ContainerTitle = styled.div`
  z-index: 1;
  padding-top: 27vw;
  padding-left: 10vw;
  
`

const Title = styled.h1`
  font-family: 'Prata', sans-serif;
  font-size: 3.0rem;
  
  color: #ffffff;
  font-weight: 700;
`

const Slogan = styled.h1`
  font-family: 'Prata', sans-serif;
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.5);
`

/* PROJECTS */

const ProjectsContainer = styled.section`
  background-color: #212529;
`


const MainSection = () => {

  return (
    <div>
      <ContainerMainSection>

        <BackgroundContainer>
          <BackgroundGradient>

            <ContainerTitle>
              
              <Title>Hello,</Title>
              <Slogan>I'm Brawer Nuñez &</Slogan>
            </ContainerTitle>
          </BackgroundGradient>


        </BackgroundContainer>


      </ContainerMainSection>

      <Projects />

    </div>
    
  );
};

export default MainSection;

/* background-color: transparent;
  background-image: linear-gradient(90deg, #111111 0%, #222222 100%);
  opacity: 0.8; */