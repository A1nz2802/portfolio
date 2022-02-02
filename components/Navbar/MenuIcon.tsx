import styled from "styled-components";

const Container = styled.div`
  padding: 5px;
`
const MenuItem = styled.span`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #212529;
`

const MenuButton = styled.button`
  
  width: 30px;
  height: 24px;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: #fff;
  justify-content: space-between;
  cursor: pointer;

  &:hover > ${ MenuItem } {
    background-color: #6c757d;
  }
`

const MenuIcon = () => {
  return (
    <Container>
      <MenuButton>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </MenuButton>
    </Container>
  );
};

export default MenuIcon;
