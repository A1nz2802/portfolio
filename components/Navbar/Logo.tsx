import styled from "styled-components";
import Link from 'next/link';

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.3rem;
  margin: 2px;
  letter-spacing: 0px;

  &:hover {
    cursor: pointer;
  }
`

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Title>Portfolio</Title>
      </Link>
    </div>
  )
};

export default Logo;