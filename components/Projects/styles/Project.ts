import Image from "next/image"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProjectItem = styled.div`
  border-radius: 5px;
  border-color: transparent;
  display: block;
  width: 100%;
  background-color: #fff;
`

export const ProjectTitle = styled.p`
  font-family: 'poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;

`
export const ProjectImg = styled(Image)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-color: transparent;
`

export const ProjectDescription = styled.div`
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
`

export const IconsContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledIcon = styled(FontAwesomeIcon)`
  
`

export const Tags = styled.div`
  line-height: 1.4rem;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(182, 180, 231, 0.15);
`

export const Tag = styled.p`
  padding-left: 3px;
  color: #6a67ce;
  font-family: 'poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
`