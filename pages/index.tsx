import type { NextPage } from 'next'
import styled from 'styled-components';
import Header from '../components/Navbar/Header';

const DivTest = styled.div`
  background-color: indigo;
`

const Home: NextPage = () => {

  return( 
  <div>
    <Header />
    <DivTest>
      <h1>algo</h1>
    </DivTest>
  </div>
  )
}

export default Home;
