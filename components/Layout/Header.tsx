import styled from 'styled-components';
import { mediaQueries } from '../../utils/breakPoints';

import Logo from '../Navbar/Logo';
import MenuIcon from '../Navbar/MenuIcon';
import SubHeader from '../Navbar/SubHeader';

const HeaderNav = styled.header`
padding: 8px 15px;
margin-right: auto;
margin-left: auto;
max-width: 479px;

${ mediaQueries('sm') } {
  
}
`

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0 auto;
align-items: center;


`
const Hr = styled.hr`
border: 0;
border-top: 1px solid #dee2e6;
`

const Header = () => {
  return (
    <HeaderNav>

      <Container>
        <Logo />
        <MenuIcon />
      </Container>

      <Hr />

      <SubHeader />

    </HeaderNav>
  )
};

export default Header;
