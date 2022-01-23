import styled from "styled-components";

const Container = styled.div`
  margin-top: 9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

/* const Description = styled.div`

`
 */
const Title = styled.a`
  color: #1a1d20;
  font-size: 1.3rem;
  font-weight: 500;
`

const ContainerIcons = styled.div`

`

const Item = styled.div`
  
`

const ImgIcon = styled.img`
  
`

const SubHeader = () => {
  return (
    <Container>
      
      <div>
        <Title>Mis Redes Sociales</Title>
      </div>

      <ContainerIcons>
        <Item> <ImgIcon src={'./icons/discord-brands.svg'}></ImgIcon>  </Item>
        <Item> <ImgIcon></ImgIcon>  </Item>
        <Item> <ImgIcon></ImgIcon>  </Item>
        <Item> <ImgIcon></ImgIcon>  </Item>
      </ContainerIcons>
    </Container>
  )
};

export default SubHeader;
