import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto;
`

const ListItem = styled.li`
  
`


const Navigation = () => {
  return (
    <div>

      <List>

        <Logo />
        <ListItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ListItem>

      </List>

    </div>
  )
}

export default Navigation;
